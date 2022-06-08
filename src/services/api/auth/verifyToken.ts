import { AxiosResponse } from 'axios';

import { http } from '../..';

export type VerifyTokenDTO = {
  token: string;
};

type Response = {
  token: string;
};

export const verifyToken = (data: VerifyTokenDTO) => {
  return http.post<VerifyTokenDTO, AxiosResponse<Response>>('/auth/jwt/verify/', data);
};
