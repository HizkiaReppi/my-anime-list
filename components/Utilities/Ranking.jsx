'use client';

import { ChartBar } from '@phosphor-icons/react';

const Ranking = ({ ranking }) => {
	return (
		<div className='flex items-center gap-1'>
			<ChartBar
				size={21}
				weight='fill'
				className='text-yellow-300 dark:text-yellow-400'
			/>
			<p className='text-xs font-semibold'>{ranking}</p>
		</div>
	);
};

export default Ranking;
