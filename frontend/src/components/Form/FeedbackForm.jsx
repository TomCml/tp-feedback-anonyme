import React, { useEffect, useState } from 'react';
import CustomSelect from './CustomSelect/CustomSelect';
import styles from './FeedbackForm.module.css';
import { getPeople } from '../../functions/getPeople';

const FeedbackForm = ({ onAddFeedback }) => {
	const [category, setCategory] = useState('');
	const [name, setName] = useState('');
	const [text, setText] = useState('');
	const categories = 'categorie1, categorie2, categorie3, categorie4';
	const names = 'name1, name2, name3, name4';

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

	const handleSubmit = (e) => {
		e.preventDefault();
		if (category && name && text) {
			onAddFeedback({ category, name, text });
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
							optionsString={categories}
							value={category}
							onChange={(e) => setCategory(e.target.value)}
							placeholder='Choix de catégorie'
						/>
						<CustomSelect
							optionsString={names}
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
						placeholder='Input texte'
						className={styles.textarea}
					/>
				</div>
			</form>
		</div>
	);
};

export default FeedbackForm;
