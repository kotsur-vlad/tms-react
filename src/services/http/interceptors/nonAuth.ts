import { AxiosError, AxiosInstance } from 'axios';

import { clearToken } from '../tokens';
import { history } from '../../../AppRoot';

export const notAuthInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.response.use(undefined, (error: AxiosError) => {
    if (error.response?.status === 401) {
      clearToken('access');
      clearToken('refresh');
      history.push('/login');
    }

    return Promise.reject(error);
  });
};
