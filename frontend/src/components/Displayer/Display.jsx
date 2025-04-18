import React, { useEffect, useState } from 'react';
import styles from './Display.module.css';
import Card from './Card/Card';

import { getFeedbacks } from '../../functions/getFeedbacks';

const Display = () => {
	const [feedbacks, setFeedbacks] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await getFeedbacks();
				setFeedbacks(result);
			} catch (err) {
				console.error('Erreur lors du fetch :', err);
			}
		};

		fetchData();
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.cards}>
				{feedbacks.slice(0, 10).map((item) => (
					<Card
						key={item._id}
						className={styles.card}
						category={
							item.people.category === 'teacher'
								? 'Professeur'
								: 'Étudiant'
						}
						name={item.people.name}
						content={item.feedback}
					/>
				))}
			</div>
		</div>
	);
};

export default Display;
