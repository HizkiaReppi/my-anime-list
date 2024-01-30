'use client';

import { Spinner } from 'flowbite-react';
import { useState, useEffect } from 'react';

export default function loading() {
	const [dotCount, setDotCount] = useState(3);

	useEffect(() => {
		const interval = setInterval(() => {
			setDotCount(prevCount => (prevCount + 1) % 4);
		}, 500);
		return () => clearInterval(interval);
	}, []);

	const dots = Array.from({ length: dotCount }).map((_, i) => (
		<span
			key={i}
			className='animate-ping mr-1 text-lg'>
			.
		</span>
	));
	return (
		<div className='flex flex-col justify-center items-center min-h-screen mx-auto'>
			<Spinner
				aria-label='Loading...'
				size='xl'
			/>
			<p className='text-xl font-semibold mt-5'>Loading{dots}</p>
		</div>
	);
}
