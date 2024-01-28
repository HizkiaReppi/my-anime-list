import axios from './axios';

export const getData = async (url, params) => {
	try {
		const response = await axios.get(url, params);
		return response.data;
	} catch (error) {
		console.error('API GET Error:', error);
		return error;
	}
};
