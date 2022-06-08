import { AxiosError, AxiosInstance } from 'axios';

import api, { setToken } from '../..';
import { http } from '../http';
import { clearToken, getToken } from '../tokens';
import { history } from '../../../AppRoot';

export const notAuthInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.response.use(undefined, (error: AxiosError) => {
    if (error.response?.status === 401) {
      const refreshToken = getToken('refresh');

      if (refreshToken) {
        api.auth.verifyToken({ token: refreshToken }).then(() => {
          api.auth.refreshToken({ refresh: refreshToken }).then((res) => {
            setToken('access', res.data.access);
          });
        });
        return;
      }

      clearToken('access');
      clearToken('refresh');
      history.push('/login');
    }

    return Promise.reject(error);
  });
};
