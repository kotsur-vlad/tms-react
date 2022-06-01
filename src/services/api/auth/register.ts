import { AxiosResponse } from 'axios';

import { http } from '../..';

export type RegisterDTO = {
  username: string;
  email: string;
  password: string;
};

type Response = {
  username: string;
  email: string;
  id: number;
};

export const register = (data: RegisterDTO) => {
  return http.post<RegisterDTO, AxiosResponse<Response>>('/auth/users/', data);
};
