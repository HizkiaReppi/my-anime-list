'use client';

import Link from 'next/link';
import { GoogleLogo } from '@phosphor-icons/react';
import { FloatingLabel, Button } from 'flowbite-react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Register() {
	const handleSubmit = async e => {
		e.preventDefault();

		const email = e.target.email.value;
		const name = e.target.name.value;
		const password = e.target.password.value;
		const confirmPassword = e.target['confirm-password'].value;

		if (password !== confirmPassword) {
			throw new Error('Password tidak sama!');
		}

		try {
			const res = await axios.post('/api/auth/register', {
				email,
				name,
				password,
				confirmPassword,
			});

			if (res.status === 201) {
				alert('Berhasil mendaftar!');
				const router = useRouter();
				router.push('/auth/login');
			}
		} catch (error) {
			alert(error.response.data.message);
		}
	};

	const handleLoginGoogle = () => {
		axios.post('/api/auth/google');
	};

	return (
		<>
			<h1 className='text-2xl font-semibold'>Register</h1>
			<hr className='mt-3 mb-5' />
			<form
				onSubmit={handleSubmit}
				className='flex flex-col gap-5'>
				<FloatingLabel
					variant='standard'
					label='Email'
					type='email'
					id='email'
				/>
				<FloatingLabel
					variant='standard'
					label='Name'
					type='text'
					id='name'
				/>
				<FloatingLabel
					variant='standard'
					label='Password'
					type='password'
					id='password'
				/>
				<FloatingLabel
					variant='standard'
					label='Konfirmasi Password'
					type='password'
					id='confirm-password'
				/>
				<Button type='submit'>Register</Button>
			</form>
			<hr className='my-3' />
			<small className='text-xs text-center flex justify-center gap-1'>
				Sudah punya akun?{' '}
				<Link
					href='/auth/login'
					className='underline hover:no-underline'>
					Login sekarang!
				</Link>
			</small>
			<hr className='my-3' />
			<div className='flex flex-col justify-center items-center mt-3'>
				<Button
					color='dark'
					onClick={handleLoginGoogle}>
					<GoogleLogo
						weight='fill'
						className='w-5 h-5 mr-2'
					/>
					Login dengan Google
				</Button>
			</div>
		</>
	);
}
