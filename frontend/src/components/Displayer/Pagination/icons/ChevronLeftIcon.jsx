import React from 'react';

export const ChevronLeftIcon = ({ size = 22, strokeWidth = 2, ...props }) => (
	<svg
		height={size}
		width={size}
		viewBox='0 0 24 24'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='m15 18l-6-6l6-6'
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={strokeWidth}
		/>
	</svg>
);
