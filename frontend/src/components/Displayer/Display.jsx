import React, { useEffect, useMemo, useState } from 'react';
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

		return feedbacks.filter((item) => {
			const name = (item?.people?.name || item?.name || '').toLowerCase();
			const category = (
				item?.people?.category === 'teacher'
					? 'Professeur'
					: item?.people?.category === 'student'
					? 'Etudiant'
					: item?.category || 'Inconnu'
			).toLowerCase();
			const content = (item?.feedback || item?.text || '').toLowerCase();

			return (
				name.includes(lowerSearch) ||
				category.includes(lowerSearch) ||
				content.includes(lowerSearch)
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

	useEffect(() => {
		setCurrentPage(1);
	}, [searchTerm]);

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
								? 'Etudiant'
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
