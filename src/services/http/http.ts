import axios from 'axios';

import { interceptors } from './interceptors';

export const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  responseType: 'json',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

interceptors.forEach((interceptor) => {
  interceptor(http);
});
