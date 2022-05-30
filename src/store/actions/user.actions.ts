import type { UserModel } from '../../types';

export const getUserAC = (userInfo: UserModel) =>
  ({ type: 'user/GET_USER', payload: userInfo } as const);

type GetUser = ReturnType<typeof getUserAC>;

export type UserActions = GetUser;
