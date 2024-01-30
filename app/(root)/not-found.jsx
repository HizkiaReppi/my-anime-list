import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='flex flex-col items-center justify-center max-w-xl mx-auto min-h-screen'>
			<h1 className='font-bold text-2xl'>Page Not Found</h1>
			<Link
				href='/'
				className='px-4 py-2 mt-2 rounded bg-gray-800 hover:bg-gray-900 transition-all text-white text-sm'>
				Back to Home
			</Link>
		</div>
	);
}
