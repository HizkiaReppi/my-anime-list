'use client';

import { Pagination } from 'flowbite-react';
import { useState } from 'react';

const Component = ({ page, setPage, lastPage }) => {
	const [currentPage, setCurrentPage] = useState(page);

	const scrollToTop = () => {
		scrollTo({ top: 0, behavior: 'smooth' });
	};

	const onPageChange = page => {
		setCurrentPage(page);
		setPage(page);
		scrollToTop();
	};

	return (
		<div className='flex flex-col justify-center items-center overflow-x-auto mt-8'>
			<p className='text-sm font-semibold'>
				Showing {currentPage} of {lastPage} Page
			</p>
			<Pagination
				currentPage={currentPage}
				totalPages={lastPage}
				onPageChange={onPageChange}
				showIcons
			/>
		</div>
	);
};

export default Component;
