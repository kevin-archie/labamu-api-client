import { AxiosRequestConfig } from 'axios';

const baseAxiosConfig: AxiosRequestConfig = {
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json',
	},
};

export default baseAxiosConfig;
