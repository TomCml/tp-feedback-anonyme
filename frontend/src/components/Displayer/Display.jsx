import React from 'react';
import Card from './Card/Card';
import styles from './Display.module.css';

const Display = ({ feedbacks = [] }) => {
	return (
		<div className={styles.container}>
			<div className={styles.cards}>
				{feedbacks.slice(0, 10).map((item, index) => (
					<Card
						key={item._id || index}
						className={styles.card}
						category={
							item?.people?.category === 'teacher'
								? 'Professeur'
								: item?.people?.category === 'student'
								? 'Étudiant'
								: item?.category || 'Inconnu'
						}
						name={item?.people?.name || item?.name}
						content={item?.feedback || item?.text}
					/>
				))}
			</div>
		</div>
	);
};

export default Display;
