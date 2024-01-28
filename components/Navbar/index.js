'use client';

import Link from 'next/link';
import {
	Navbar,
	NavbarBrand,
	NavbarToggle,
	NavbarCollapse,
} from 'flowbite-react';
import Search from '@/components/Search';
import ThemeSwitch from '@/components/ThemeSwitch';

const Component = () => {
	return (
		<Navbar
			rounded
			className='sticky top-0 left-0 px-7 md:px-10 shadow-lg z-10'>
			<NavbarBrand
				as={Link}
				href='/'>
				<span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
					AnimeList
				</span>
			</NavbarBrand>
			<NavbarToggle />
			<NavbarCollapse>
				<div className='flex justify-between items-center gap-5'>
					<Search />
					<ThemeSwitch />
				</div>
			</NavbarCollapse>
		</Navbar>
	);
};

export default Component;
