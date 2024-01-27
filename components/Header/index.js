import Link from 'next/link';

const Header = ({ title, linkHref, linkTitle }) => {
	return (
		<div className='flex justify-between items-center mb-4'>
			<h1 className='font-semibold text-2xl '>{title}</h1>
			{linkHref && linkTitle ? (
				<Link
					href={linkHref}
					className='text-xl underline hover:text-gray-500 transition-all'>
					{linkTitle}
				</Link>
			) : null}
		</div>
	);
};

export default Header;
