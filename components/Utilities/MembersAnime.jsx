'use client';

import { User } from '@phosphor-icons/react';

const MembersAnime = ({ members }) => {
	return (
		<div className='flex items-center gap-1'>
			<User
				size={21}
				weight='fill'
				className='text-gray-800 dark:text-gray-300'
			/>
			<p className='text-xs font-semibold'>{members}</p>
		</div>
	);
};

export default MembersAnime;
