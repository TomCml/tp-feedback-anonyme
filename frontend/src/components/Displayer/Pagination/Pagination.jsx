import React from 'react';
import styles from './Pagination.module.css';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import { ChevronRightIcon } from './icons/ChevronRightIcon';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
	const handlePageChange = (newPage) => {
		if (newPage >= 1 && newPage <= totalPages) {
			onPageChange(newPage);
		}
	};

	return (
		<div className={styles.pagination}>
			<button
				onClick={() => handlePageChange(currentPage - 1)}
				disabled={currentPage === 1}
				className={`${styles.button} ${styles.previousButton}`}
			>
				<ChevronLeftIcon />
			</button>

			<span className={styles.pageInfo}>
				Page {currentPage} / {totalPages}
			</span>

			<button
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
				className={`${styles.button} ${styles.nextButton}`}
			>
				<ChevronRightIcon />
			</button>
		</div>
	);
};

export default Pagination;
