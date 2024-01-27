import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
	title: 'Anime List',
	description: 'Website Anime Indonesia',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body suppressHydrationWarning={true}>
				<Navbar />
				<main className='mx-7 md:mx-10 my-3'>{children}</main>
			</body>
		</html>
	);
}
