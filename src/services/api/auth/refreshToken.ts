import { AxiosResponse } from 'axios';

import { http } from '../..';

export type RefreshTokenDTO = {
  refresh: string;
};

type Response = {
  access: string;
};

export const refreshToken = (data: RefreshTokenDTO) => {
  return http.post<RefreshTokenDTO, AxiosResponse<Response>>('/auth/jwt/refresh/', data);
};
