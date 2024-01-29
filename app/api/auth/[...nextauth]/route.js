import NextAuth from 'next-auth';
import GoogleAuth from 'next-auth/providers/google';

export const authOption = {
	providers: [
		GoogleAuth({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
