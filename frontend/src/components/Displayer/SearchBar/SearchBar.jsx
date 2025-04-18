import { SearchIcon } from './Icon/SearchIcon';
import styles from './SearchBar.module.css';

function SearchBar({ searchTerm, onSearch }) {
	return (
		<div className={styles.container}>
			<SearchIcon size={22} strokeWidth={2} className={styles.icon} />
			<input
				type='text'
				placeholder='Rechercher...'
				value={searchTerm}
				onChange={(e) => onSearch(e.target.value)}
				className={styles.input}
			/>
		</div>
	);
}

export default SearchBar;
