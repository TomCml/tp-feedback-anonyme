import React, { useMemo, useState } from 'react';
import Card from './Card/Card';
import styles from './Display.module.css';
import SearchBar from './SearchBar/SearchBar';

const Display = ({ feedbacks = [] }) => {
	const [searchTerm, setSearchTerm] = useState('');

	// Fonction pour tout transformer en texte et chercher dedans
	const filteredFeedbacks = useMemo(() => {
		if (!searchTerm.trim()) return feedbacks;

		return feedbacks.filter((fb) =>
			Object.values(fb).some((value) =>
				String(value).toLowerCase().includes(searchTerm.toLowerCase()),
			),
		);
	}, [searchTerm, feedbacks]);

	return (
		<div className={styles.container}>
			<div className={styles.filters}>
				<SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
			</div>
			<div className={styles.cards}>
				{filteredFeedbacks.slice(0, 10).map((item, index) => (
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
