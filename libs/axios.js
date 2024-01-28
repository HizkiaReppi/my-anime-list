import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json',
	},
});

instance.interceptors.response.use(
	response => response,
	error => {
		console.error('Axios Response Error:', error);
		return Promise.reject(error);
	},
);

export default instance;
