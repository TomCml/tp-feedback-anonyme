import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
	return (
		<div className={styles.pagination}>
			<button
				onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
				disabled={currentPage === 1}
				className={styles.previousButton}
			>
				Précédent
			</button>

			<span className={styles.pageInfo}>
				Page {currentPage} / {totalPages}
			</span>

			<button
				onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
				disabled={currentPage === totalPages}
				className={styles.nextButton}
			>
				Suivant
			</button>
		</div>
	);
};

export default Pagination;
