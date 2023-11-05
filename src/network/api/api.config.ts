import { API_KEY, API_URL } from '@env';

export interface IApiConfig {
  url: string;
  apiKey: string;
  minimumTimeout: number;
}

export const DEFAULT_API_CONFIG: IApiConfig = {
  url: API_URL,
  minimumTimeout: 1000,
  apiKey: API_KEY,
};
