import { http } from '../..';
import type { UserModel } from '../../../types';

export const getUserInfo = () => {
  return http.get<UserModel>('/auth/users/me/');
};
