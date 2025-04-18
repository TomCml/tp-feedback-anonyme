import React from 'react';
import styles from './CustomSelect.module.css';

const CustomSelect = ({
	options = [],
	value,
	onChange,
	placeholder,
	disabled,
}) => (
	<select
		className={styles.select}
		value={value}
		onChange={(e) => onChange(e.target.value)}
		disabled={disabled}
		required
	>
		<option value=''>{placeholder}</option>
		{options.map((option) => (
			<option key={option} value={option}>
				{option}
			</option>
		))}
	</select>
);

export default CustomSelect;
