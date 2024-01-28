import './globals.css';
import { Poppins } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Providers from './providers';

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
				className={`${poppins.className} bg-white dark:bg-slate-900`}
				suppressHydrationWarning={true}>
				<Providers>
					<Navbar />
					<main className='mx-7 md:mx-10 my-7'>{children}</main>
				</Providers>
			</body>
		</html>
	);
}
