import React, { useState } from 'react';
import styles from './FeedbackForm.module.css'; // Import du module CSS

const FeedbackForm = ({ onAddFeedback }) => {
	const [category, setCategory] = useState('');
	const [name, setName] = useState('');
	const [text, setText] = useState('');

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
			<h1 className={styles.title}>Feedback Form</h1>
			<form onSubmit={handleSubmit} className={styles.form}>
				<div className={styles.formGroup}>
					<label htmlFor='category' className={styles.label}>
						Choix de catégorie
					</label>
					<select
						id='category'
						value={category}
						onChange={(e) => {
							setCategory(e.target.value);
							setName('');
						}}
						className={styles.select}
					>
						<option value=''>Sélectionnez une catégorie</option>
						<option value='cat1'>Catégorie 1</option>
						<option value='cat2'>Catégorie 2</option>
					</select>
				</div>

				<div className={styles.formGroup}>
					<label htmlFor='name' className={styles.label}>
						Choix du nom
					</label>
					<select
						id='name'
						value={name}
						onChange={(e) => setName(e.target.value)}
						disabled={!category}
						className={styles.select}
					>
						<option value=''>Sélectionnez un nom</option>
						<option value='name1'>Nom 1</option>
						<option value='name2'>Nom 2</option>
					</select>
				</div>

				<button
					type='submit'
					className={styles.submitButton}
					disabled={!category || !name || !text}
				>
					Valider
				</button>
			</form>

			<div className={styles.textInputContainer}>
				<label htmlFor='feedback-text' className={styles.label}>
					Feedback-text
				</label>
				<textarea
					id='feedback-text'
					value={text}
					onChange={(e) => setText(e.target.value)}
					placeholder='Input texte'
					className={styles.textarea}
				/>
			</div>
		</div>
	);
};

export default FeedbackForm;
