import React, { useEffect, useState } from 'react';
import { getPeople } from '../../functions/getPeople';
import CustomSelect from './CustomSelect/CustomSelect';
import styles from './FeedbackForm.module.css';

const FeedbackForm = ({ onAddFeedback }) => {
	const [category, setCategory] = useState('');
	const [name, setName] = useState('');
	const [text, setText] = useState('');
	const [peoples, setPeoples] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getPeople();
				setPeoples(data);
			} catch (err) {
				console.error('Erreur lors du fetch :', err);
			}
		};
		fetchData();
	}, []);

	const categories = [...new Set(peoples.map((p) => p.category))];

	const filteredNames = peoples
		.filter((p) => p.category === category)
		.map((p) => p.name);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (category && name && text) {
			onAddFeedback({
				people: { category, name },
				feedback: text,
			});
			setCategory('');
			setName('');
			setText('');
		}
	};

	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit} className={styles.form}>
				<div className={styles.inputs}>
					<div className={styles.selects}>
						<CustomSelect
							optionsString={categories.join(',')}
							value={category}
							onChange={(e) => {
								setCategory(e.target.value);
								setName('');
							}}
							placeholder='Choix de catégorie'
						/>
						<CustomSelect
							optionsString={filteredNames.join(',')}
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder='Choix du nom'
							disabled={!category}
						/>
					</div>

					<div className={styles.valid}>
						<button
							type='submit'
							className={styles.submitButton}
							disabled={!category || !name || !text}
						>
							Valider
						</button>
					</div>
				</div>

				<div className={styles.contentInput}>
					<textarea
						id='feedback-text'
						value={text}
						onChange={(e) => setText(e.target.value)}
						placeholder='Écrivez votre avis...'
						className={styles.textarea}
					/>
				</div>
			</form>
		</div>
	);
};

export default FeedbackForm;
