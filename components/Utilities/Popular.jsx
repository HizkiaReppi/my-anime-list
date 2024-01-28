'use client';

import { Fire } from '@phosphor-icons/react';

const Popular = ({ popularity }) => {
	return (
		<div className='flex items-center gap-1'>
			<Fire
				size={21}
				weight='fill'
				className='text-red-500 dark:text-red-600'
			/>
			<p className='text-xs font-semibold'>{popularity}</p>
		</div>
	);
};

export default Popular;
