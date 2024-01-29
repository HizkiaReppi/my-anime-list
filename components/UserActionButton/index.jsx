import Image from 'next/image';
import Link from 'next/link';
import {
	Dropdown,
	DropdownDivider,
	DropdownHeader,
	DropdownItem,
} from 'flowbite-react';
import { authUserSession } from '@/libs/auth';

const UserActionButton = async () => {
	const user = await authUserSession();

	if (user) {
		return (
			<>
				<Dropdown
					arrowIcon={false}
					inline
					label={
						<Image
							src={user.image}
							alt='User Setting'
							width={40}
							height={40}
							className='rounded-full hover:scale-100'
						/>
					}>
					<DropdownHeader>
						<span className='block text-sm'>{user.name}</span>
						<span className='block truncate text-xs font-medium'>
							{user.email}
						</span>
					</DropdownHeader>
					<DropdownItem>
						<Link href='/users/dashboard'>Dashboard</Link>
					</DropdownItem>
					<DropdownDivider />
					<DropdownItem>
						<Link href='/api/auth/signout'>Sign out</Link>
					</DropdownItem>
				</Dropdown>
			</>
		);
	}

	return <Link href='/api/auth/signin'>Sign In</Link>;
};

export default UserActionButton;
