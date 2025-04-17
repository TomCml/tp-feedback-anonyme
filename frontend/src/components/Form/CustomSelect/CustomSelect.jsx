import React from 'react';
import styles from './CustomSelect.module.css';

const CustomSelect = ({
	value,
	onChange,
	optionsString,
	placeholder = 'Choisir...',
}) => {
	const options = optionsString
		.split(',')
		.map((opt) => opt.trim())
		.filter((opt) => opt.length > 0);

	return (
		<select className={styles.select} value={value} onChange={onChange}>
			<option value='' disabled hidden>
				{placeholder}
			</option>
			{options.map((option) => (
				<option key={option} value={option}>
					{option}
				</option>
			))}
		</select>
	);
};

export default CustomSelect;
