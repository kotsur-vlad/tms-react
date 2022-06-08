import { http } from '../..';

export type ActivationDTO = {
  uid: string;
  token: string;
};

export const activation = (data: ActivationDTO) => {
  return http.post<ActivationDTO>('/auth/users/activation/', data);
};
