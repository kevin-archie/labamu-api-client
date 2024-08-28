import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import baseAxiosConfig from './axios-base-config';

export const createAxiosInstance = (customConfig: AxiosRequestConfig = {}): AxiosInstance => {
	const config = {
		...baseAxiosConfig,
		...customConfig,
	};
	return axios.create(config);
};
