import React from 'react';

const HeaderMenu = ({ title }) => {
	return (
		<div>
			<div className='p-8'>
				<h3 className='text-center font-semibold text-2xl text-slate-900 dark:text-gray-50'>
					{title}
				</h3>
			</div>
		</div>
	);
};

export default HeaderMenu;
