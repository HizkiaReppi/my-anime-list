import './globals.css';
import { Poppins } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/Utilities/ScrollToTop';
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
		<html
			lang='en'
			suppressHydrationWarning={true}>
			<body
				className={`${poppins.className} bg-white dark:bg-slate-900 flex flex-col min-h-screen`}>
				<Providers>
					<Navbar />
					<main className='mx-7 md:mx-10 my-7 flex-grow'>{children}</main>
					<Footer />
					<ScrollToTop />
				</Providers>
			</body>
		</html>
	);
}
