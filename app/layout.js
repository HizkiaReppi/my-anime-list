import './globals.css';
import Navbar from '@/components/Navbar';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
	title: 'Anime List',
	description: 'Website Anime Indonesia',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={`${poppins.className}`}
				suppressHydrationWarning={true}>
				<Navbar />
				<main className='mx-7 md:mx-10 my-3'>{children}</main>
			</body>
		</html>
	);
}
