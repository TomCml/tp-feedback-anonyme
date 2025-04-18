import React, { useMemo, useState } from 'react';
import Card from './Card/Card';
import styles from './Display.module.css';
import Pagination from './Pagination/Pagination';
import SearchBar from './SearchBar/SearchBar';

const Display = ({ feedbacks = [] }) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 5;

	const filteredFeedbacks = useMemo(() => {
		if (!searchTerm.trim()) return feedbacks;

		const lowerSearch = searchTerm.toLowerCase();

		return feedbacks.filter((fb) => {
			const name = fb?.people?.name || fb?.name || '';
			const content = fb?.feedback || fb?.text || '';

			return (
				name.toLowerCase().includes(lowerSearch) ||
				content.toLowerCase().includes(lowerSearch)
			);
		});
	}, [searchTerm, feedbacks]);

	const totalPages = Math.ceil(filteredFeedbacks.length / itemsPerPage);

	const paginatedFeedbacks = useMemo(() => {
		const start = (currentPage - 1) * itemsPerPage;
		return filteredFeedbacks.slice(start, start + itemsPerPage);
	}, [filteredFeedbacks, currentPage]);

	const handlePageChange = (newPage) => {
		setCurrentPage(newPage);
	};

	return (
		<div className={styles.container}>
			<div className={styles.filters}>
				<SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
			</div>

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
