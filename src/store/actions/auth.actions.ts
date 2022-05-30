import { LOGOUT, SET_AUTH } from '../types';

export const logoutAC = (): LogoutAction => ({ type: LOGOUT });

export const setAuthAC = (isAuth: boolean): SetAuthAction =>
  ({ type: 'auth/SET_AUTH', payload: isAuth } as const);

type LogoutAction = { type: typeof LOGOUT };
type SetAuthAction = { type: typeof SET_AUTH; payload: boolean };

export type AuthActions = SetAuthAction | LogoutAction;
