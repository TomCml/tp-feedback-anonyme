import React from 'react';

export const ChevronRightIcon = ({ size = 22, strokeWidth = 2, ...props }) => (
	<svg
		height={size}
		width={size}
		viewBox='0 0 24 24'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={strokeWidth}
			d='m9 18l6-6l-6-6'
		/>
	</svg>
);
