import {
	Footer,
	FooterCopyright,
	FooterLink,
	FooterLinkGroup,
} from 'flowbite-react';

const Component = () => {
	const year = new Date().getFullYear();

	return (
		<Footer className='px-7 md:px-10 rounded-none py-5'>
			<FooterCopyright
				href='https://hizkiareppi.vercel.app'
				by='Hizkia Reppi'
				year={year}
			/>
			<FooterLinkGroup>
				<FooterLink href='https://github.com/HizkiaReppi'>GitHub</FooterLink>
				<FooterLink href='https://instagram.com/hizkiajefren_'>
					Instagram
				</FooterLink>
				<FooterLink href='https://linkedin.com/in/hizkiareppi'>
					Linkedin
				</FooterLink>
			</FooterLinkGroup>
		</Footer>
	);
};

export default Component;
