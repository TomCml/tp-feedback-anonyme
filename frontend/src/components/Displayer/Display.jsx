import React, { useState } from 'react';
import Card from './Card/Card';
import styles from './Display.module.css';
import Pagination from './Pagination/Pagination';

const Display = ({ feedbacks = [] }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 5;

	const totalPages = Math.ceil(feedbacks.length / itemsPerPage);

	const paginatedFeedbacks = feedbacks.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	const handlePageChange = (newPage) => {
		setCurrentPage(newPage);
	};

	return (
		<div className={styles.container}>
			<div className={styles.cards}>
				{paginatedFeedbacks.map((item, index) => (
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

			{totalPages > 1 && (
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={handlePageChange}
				/>
			)}
		</div>
	);
};

export default Display;
