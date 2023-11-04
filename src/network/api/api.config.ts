import { API_URL } from '@env';

export interface IApiConfig {
  url: string;
  minimumTimeout: number;
}

export const DEFAULT_API_CONFIG: IApiConfig = {
  url: API_URL,
  minimumTimeout: 1000,
};
