import '../globals.css';
import { Poppins } from 'next/font/google';
import Providers from '../providers';

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
				className={`${poppins.className} bg-white dark:bg-slate-900 flex justify-center items-center min-h-screen`}>
				<Providers>
					<main className='p-10 bg-gray-50 dark:bg-slate-800 shadow-lg w-[500px] rounded-lg'>
						{children}
					</main>
				</Providers>
			</body>
		</html>
	);
}
