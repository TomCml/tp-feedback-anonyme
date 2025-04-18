import React, { useEffect, useState } from 'react';
import CustomSelect from './CustomSelect/CustomSelect';
import styles from './FeedbackForm.module.css';

const FeedbackForm = ({ onNewFeedback }) => {
	const [category, setCategory] = useState('');
	const [name, setName] = useState('');
	const [text, setText] = useState('');
	const [people, setPeople] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const peoples = await getPeople();
				console.log('Personnes récupérées :', peoples);
			} catch (err) {
				console.error('Erreur lors du fetch :', err);
			}
		};

		fetchData();
	}, []);
	const categories = [...new Set(people.map((p) => p.category))];
	const names = people
		.filter((p) => p.category === category)
		.map((p) => p.name);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(null);

		try {
			const response = await fetch('http://localhost:3001/feedbacks', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					people: { name, category },
					feedback: text,
				}),
			});

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.message || 'Erreur serveur');
			}

			const result = await response.json();
			onNewFeedback(result);
			setText('');
			setName('');
			setCategory('');
		} catch (err) {
			setError(err.message);
		}
	};

	if (isLoading) return <div className={styles.loading}>Chargement...</div>;
	if (error) return <div className={styles.error}>Erreur: {error}</div>;

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Feedback Form</h1>

			<form onSubmit={handleSubmit} className={styles.form}>
				<div className={styles.inputGroup}>
					<label className={styles.label}>Catégorie</label>
					<CustomSelect
						options={categories}
						value={category}
						onChange={setCategory}
						placeholder='Sélectionnez une catégorie'
					/>
				</div>

				<div className={styles.inputGroup}>
					<label className={styles.label}>Nom</label>
					<CustomSelect
						options={names}
						value={name}
						onChange={setName}
						placeholder='Sélectionnez un nom'
						disabled={!category}
					/>
				</div>

				<div className={styles.inputGroup}>
					<label className={styles.label}>Feedback</label>
					<textarea
						className={styles.textarea}
						value={text}
						onChange={(e) => setText(e.target.value)}
						placeholder='Votre message...'
						minLength={10}
						required
					/>
				</div>

				<button
					type='submit'
					className={styles.submitButton}
					disabled={!category || !name || !text}
				>
					Envoyer
				</button>
			</form>
		</div>
	);
};

export default FeedbackForm;
