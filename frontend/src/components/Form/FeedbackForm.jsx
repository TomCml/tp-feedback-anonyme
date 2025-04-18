import React, { useState } from 'react';
import CustomSelect from './CustomSelect/CustomSelect';
import styles from './FeedbackForm.module.css';

const FeedbackForm = ({ onAddFeedback }) => {
	const [category, setCategory] = useState('');
	const [name, setName] = useState('');
	const [text, setText] = useState('');
	const option = 'categorie1, categorie2, categorie3, categorie4';
	const option2 = 'name1, name2, name3, name4';

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
						{' '}
						<CustomSelect optionsString={option} />
						<CustomSelect optionsString={option2} />
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
			</form>

			<div className={styles.contentInput}>
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
