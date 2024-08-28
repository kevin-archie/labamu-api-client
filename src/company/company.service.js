"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyService = void 0;
const axios_instance_1 = require("../common/axios-instance");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class CompanyService {
    constructor() {
        const serviceUrl = process.env.COMPANY_SERVICE_URL;
        const apiKey = process.env.COMPANY_API_KEY;
        if (!serviceUrl || !apiKey) {
            throw new Error('Missing required environment variables: COMPANY_SERVICE_URL or COMPANY_API_KEY');
        }
        this.axiosInstance = (0, axios_instance_1.createAxiosInstance)({
            baseURL: serviceUrl,
            headers: {
                'Authorization': `Bearer ${apiKey}`,
            },
        });
    }
    getById(id, params, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance.get(`internal/microsite/byslug/${id}`, {
                params,
                headers: Object.assign({}, headers),
            });
            return response.data;
        });
    }
    getBySlug(slug, params, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance.get(`internal/microsite/byslug/${slug}`);
            return response.data;
        });
    }
}
exports.CompanyService = CompanyService;
