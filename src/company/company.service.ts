import { AxiosInstance } from 'axios';
import { createAxiosInstance } from '../common/axios-instance';
import dotenv from 'dotenv';

dotenv.config();

export class CompanyService {
	private axiosInstance: AxiosInstance;

	constructor() {
		const serviceUrl = process.env.COMPANY_SERVICE_URL;
		const apiKey = process.env.COMPANY_API_KEY;

		if (!serviceUrl || !apiKey) {
			throw new Error('Missing required environment variables: COMPANY_SERVICE_URL or COMPANY_API_KEY');
		}

		this.axiosInstance = createAxiosInstance({
			baseURL: serviceUrl,
			headers: {
				'x-api-key': apiKey,
				'Content-Type': 'application/json'
			},
		});
	}

	async getById(id: string, params?: any, headers?: Record<string, string>) {
		try {
			const response = await this.axiosInstance.get(`/core/internal/company/${id}`, {
				params,
				headers: {
					...headers,
				},
			});

			return response.data;
		} catch (error) {
			console.error("Error in getById:", error);
			throw error;
		}
	}

	async getBySlug(slug: string, params?: any, headers?: Record<string, string>) {
		try {
			const response = await this.axiosInstance.get(`/core/internal/microsite/byslug/${slug}`, {
				params,
			});
			return response.data;
		} catch (error) {
			console.error("Error in getBySlug:", error);
			throw error;
		}
	}
}
