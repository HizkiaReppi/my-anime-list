'use client';

import { useState } from 'react';
import { Button } from 'flowbite-react';
import { ArrowUp } from '@phosphor-icons/react';

const ScrollToTop = () => {
	const [visible, setVisible] = useState(false);

	addEventListener('scroll', () => {
		setVisible(scrollY > innerHeight);
	});

	const scrollToTop = () => {
		scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<Button
			className={`fixed right-7 z-10 text-slate-900 bg-slate-200 dark:text-slate-200 dark:bg-slate-800 ${
				visible ? 'bottom-12' : '-bottom-40'
			} duration-500 ease-in-out transition-all`}
			onClick={scrollToTop}
			color='light'>
			<ArrowUp
				size={20}
				weight='fill'
			/>
		</Button>
	);
};

export default ScrollToTop;
