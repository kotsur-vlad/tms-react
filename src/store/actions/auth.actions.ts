import { LOGOUT, SET_AUTH } from '../types';

export const logoutAC = () => ({ type: LOGOUT });

export const setAuthAC = (isAuth) => ({ type: SET_AUTH, payload: isAuth });
