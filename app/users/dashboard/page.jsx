import { authUserSession } from '@/libs/auth';
import Image from 'next/image';

export default async function Dashboard() {
	const user = await authUserSession();

	return (
		<div>
			<h2 className='font-semibold text-2xl'>Dashboard</h2>
			<h5 className='text-base'>Hello, Welcome {user.name}</h5>
			<Image
				src={user.image}
				alt={`${user.name} Photo`}
				width={200}
				height={200}
			/>
		</div>
	);
}
