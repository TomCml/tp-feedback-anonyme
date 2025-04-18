import React, { useState } from 'react';
import CustomSelect from './CustomSelect/CustomSelect';
import styles from './FeedbackForm.module.css';

const FeedbackForm = ({ onAddFeedback }) => {
	const [category, setCategory] = useState('');
	const [name, setName] = useState('');
	const [text, setText] = useState('');
	const categories = 'categorie1, categorie2, categorie3, categorie4';
	const names = 'name1, name2, name3, name4';

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
				<div className={styles.inputs}>
					<div className={styles.selects}>
						<CustomSelect optionsString={categories} />
						<CustomSelect optionsString={names} />
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
