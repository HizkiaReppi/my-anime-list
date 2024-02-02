'use client';

import Link from 'next/link';
import { CircleNotch, GoogleLogo } from '@phosphor-icons/react';
import { FloatingLabel, Button } from 'flowbite-react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Register() {
	const { push } = useRouter();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState({
		email: '',
		name: '',
		password: '',
		confirmPassword: '',
	});
	const handleSubmit = async e => {
		e.preventDefault();
		setError({ email: '', name: '', password: '', confirmPassword: '' });

		const email = e.target.email.value;
		const name = e.target.name.value;
		const password = e.target.password.value;
		const confirmPassword = e.target['confirm-password'].value;

		if (!/^[a-zA-Z ]+$/.test(name)) {
			setError({
				...error,
				name: 'Nama hanya boleh mengandung huruf!',
			});
		}

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			setError({
				...error,
				email: 'Email tidak valid!',
			});
		}

		if (password.length < 6) {
			setError({
				...error,
				password: 'Password minimal 6 karakter!',
			});
		}

		if (password !== confirmPassword) {
			setError({
				...error,
				confirmPassword: 'Password tidak sama!',
			});
		}

		if (
			error.email !== '' ||
			error.name !== '' ||
			error.password !== '' ||
			error.confirmPassword !== ''
		) {
			return;
		}

		try {
			setLoading(true);
			const res = await axios.post('/api/auth/register', {
				email,
				name,
				password,
				confirmPassword,
			});

			if (res.status === 201) {
				e.target.reset();

				alert('Berhasil mendaftar!');

				push('/auth/login');
			}
		} catch (error) {
			if (error.response.data.message.includes('Username')) {
				setError({
					...error,
					email: error.response.data.message,
				});
			}
		} finally {
			setLoading(false);
		}
	};

	const handleRegisterWithGoogle = () => {
		axios.get('/api/auth/google');
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
					required
				/>
				{error.email && (
					<small className='text-xs text-red-500 -mt-7'>{error.email}</small>
				)}
				<FloatingLabel
					variant='standard'
					label='Name'
					type='text'
					id='name'
					required
				/>
				{error.email && (
					<small className='text-xs text-red-500 -mt-7'>{error.name}</small>
				)}
				<FloatingLabel
					variant='standard'
					label='Password'
					type='password'
					id='password'
					required
				/>
				{error.email && (
					<small className='text-xs text-red-500 -mt-7'>{error.password}</small>
				)}
				<FloatingLabel
					variant='standard'
					label='Konfirmasi Password'
					type='password'
					id='confirm-password'
					required
				/>
				{error.email && (
					<small className='text-xs text-red-500 -mt-7'>
						{error.confirmPassword}
					</small>
				)}
				<Button
					type='submit'
					disabled={loading === true ? true : false}
					className='flex items-center'>
					{loading === true ? (
						<CircleNotch
							size={20}
							className='animate-spin mr-1.5'
						/>
					) : null}
					Register
				</Button>
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
					onClick={handleRegisterWithGoogle}>
					<GoogleLogo
						weight='fill'
						className='w-5 h-5 mr-2'
					/>
					Lanjutkan dengan Google
				</Button>
			</div>
		</>
	);
}
