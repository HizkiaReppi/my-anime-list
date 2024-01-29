import axios from './axios';

export const getData = async (url, params = {}) => {
	try {
		const response = await axios.get(url, params);
		return response.data;
	} catch (error) {
		console.error('API GET Error:', error);
		return error;
	}
};

export const getNestedData = async (url, objectProperty, params = {}) => {
	try {
		const response = await axios.get(url, params);
		return response.data.data.flatMap(item => item[objectProperty]);
	} catch (error) {
		console.error('API GET Error:', error);
		return error;
	}
};

export const reproduceData = (data, gap = 8) => {
	const first = Math.floor(Math.random() * (data.length - gap));
	const last = first + gap;

	return { data: data.slice(first, last) };
};
