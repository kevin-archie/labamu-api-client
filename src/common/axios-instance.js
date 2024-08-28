"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAxiosInstance = void 0;
// src/common/axios-instance.ts
const axios_1 = __importDefault(require("axios"));
const axios_base_config_1 = __importDefault(require("./axios-base-config"));
const createAxiosInstance = (customConfig = {}) => {
    const config = Object.assign(Object.assign({}, axios_base_config_1.default), customConfig);
    return axios_1.default.create(config);
};
exports.createAxiosInstance = createAxiosInstance;
