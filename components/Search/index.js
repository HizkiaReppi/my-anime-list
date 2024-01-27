'use client';

import { MagnifyingGlass } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

const Search = () => {
	const searchRef = useRef();
	const router = useRouter();

	const handleSearch = event => {
		const keyword = searchRef.current.value;

		if (event.key === 'Enter' || event.type === 'click') {
			event.preventDefault();
			if (keyword.length < 1) {
				router.push(`/`);
			} else {
				router.push(`/search/${keyword}`);
			}
		}
	};

	return (
		<div className='relative'>
			<input
				ref={searchRef}
				type='text'
				placeholder='Search Anime'
				className='w-full md:w-80 border-0 rounded bg-gray-900 py-2 px-4 text-white'
				onKeyDown={handleSearch}
			/>
			<button
				type='button'
				className='absolute top-1 end-3'
				onClick={handleSearch}>
				<MagnifyingGlass
					size={30}
					className='text-gray-100'
				/>
			</button>
		</div>
	);
};

export default Search;
