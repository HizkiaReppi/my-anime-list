'use client';

import { MagnifyingGlass } from '@phosphor-icons/react';
import { TextInput } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

const Search = () => {
	const searchRef = useRef();
	const router = useRouter();

	const handleSearch = event => {
		const keyword = searchRef.current.value;
		if (keyword.trim() === '') return;

		const formattedKeyword = keyword.trim().replace(/\s+/g, '-').toLowerCase();
		const decodedKeyword = encodeURIComponent(formattedKeyword);

		if (event.key === 'Enter') {
			event.preventDefault();
			if (keyword.length < 1) {
				router.push(`/`);
			} else {
				router.push(`/search/${decodedKeyword}`);
			}
		}
	};

	return (
		<TextInput
			ref={searchRef}
			id='search'
			type='text'
			icon={MagnifyingGlass}
			placeholder='Cari Anime'
			onKeyDown={handleSearch}
			className='w-full md:w-80'
			autoComplete='off'
		/>
	);
};

export default Search;
