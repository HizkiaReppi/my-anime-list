import Search from '@/components/Search';
import Link from 'next/link';

const Navbar = () => {
	return (
		<header className='sticky top-0 left-0 z-10 px-3 md:px-10 bg-gray-700 shadow-lg'>
			<div className='flex flex-col md:flex-row gap-2 md:items-center justify-between p-4'>
				<Link
					href='/'
					className='font-semibold text-white text-lg md:text-xl'>
					AnimeList
				</Link>

				<Search />
			</div>
		</header>
	);
};

export default Navbar;
