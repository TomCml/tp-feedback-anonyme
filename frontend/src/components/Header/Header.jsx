import React from 'react';
import styles from './Header.module.css';
import Logo from './Logo/Logo';

const Header = () => {
	return (
		<h1 className={styles.title}>
			<Logo />
		</h1>
	);
};

export default Header;
