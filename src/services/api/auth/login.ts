import { AxiosResponse } from 'axios';

import { http } from '../..';

export type LoginDTO = {
  email: string;
  password: string;
};

type Response = {
  access: string;
  refresh: string;
};

export const login = (data: LoginDTO) => {
  return http.post<LoginDTO, AxiosResponse<Response>>('/auth/jwt/create/', data);
};
