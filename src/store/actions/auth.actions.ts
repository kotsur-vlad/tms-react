import { AxiosError } from 'axios';

import api, { setToken } from '../../services';
import { history } from '../../AppRoot';
import { LOGOUT, SET_AUTH, SET_ERROR } from '../types';
import type { LoginDTO, RegisterDTO } from '../../services/api/auth';
import type { ErrorModel } from '../../types/models/error.model';
import type { AppThunk } from '../store';

export const logoutAC = (): LogoutAction => ({ type: LOGOUT });

export const setAuthAC = (isAuth: boolean): SetAuthAction => ({ type: SET_AUTH, payload: isAuth });

export const setErrorAC = (error: ErrorModel<RegisterDTO> | string): SetErrorAction => ({
  type: SET_ERROR,
  payload: error,
});

export const registerTC =
  (data: RegisterDTO): AppThunk =>
  async (dispatch) => {
    try {
      const response = await api.auth.register(data);

      if (response.status === 201) {
        console.log(response.data);
        return response;
      }

      throw new Error();
    } catch (e) {
      if (e instanceof AxiosError) {
        dispatch(setErrorAC(e.response?.data));
        return e;
      }

      if (e instanceof Error) {
        dispatch(setErrorAC(e.message));
        return e;
      }

      dispatch(setErrorAC('Unknown error has occured'));
      return e;
    }
  };

export const loginTC =
  (data: LoginDTO): AppThunk =>
  async (dispatch) => {
    try {
      const response = await api.auth.login(data);

      if (response.status === 200) {
        setToken('access', response.data.access);
        setToken('refresh', response.data.refresh);
        history.push('/posts');
        return response;
      }

      throw new Error();
    } catch (e) {
      if (e instanceof AxiosError) {
        dispatch(setErrorAC(e.response?.data));
        return e;
      }

      console.error(e);
      return e;
    }
  };

//region Types
type LogoutAction = { type: typeof LOGOUT };
type SetAuthAction = { type: typeof SET_AUTH; payload: boolean };
type SetErrorAction = { type: typeof SET_ERROR; payload: ErrorModel<RegisterDTO> | string };
//endregion

export type AuthActions = SetAuthAction | LogoutAction | SetErrorAction;
