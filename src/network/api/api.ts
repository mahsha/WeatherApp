import axios, { type AxiosInstance } from 'axios';

import { DEFAULT_API_CONFIG, type IApiConfig } from './api.config';

export class Api {
  private readonly config: IApiConfig;

  public client: AxiosInstance;

  public constructor(config: IApiConfig = DEFAULT_API_CONFIG) {
    this.config = config;
    this.client = axios.create({
      baseURL: this.config.url,
      timeout: this.config.minimumTimeout,
      params: { key: this.config.apiKey },
    });
  }
}

export default new Api();
