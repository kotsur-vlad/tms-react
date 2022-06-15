import { AxiosError } from 'axios';

import api, { clearToken, getToken, setToken } from '../../services';
import { history } from '../../AppRoot';
import { LOGOUT, SET_AUTH, SET_ERROR } from '../types';
import { getPostsTC } from './posts.actions';
import { getUserInfoTC } from './user.actions';
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
        dispatch(setAuthAC(true));
        setToken('access', response.data.access);
        setToken('refresh', response.data.refresh);

        await dispatch(getUserInfoTC());

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

export const logoutTC = (): AppThunk => (dispatch) => {
  dispatch(logoutAC());
  clearToken('access');
  clearToken('refresh');
  history.push('/login');
};

export const initAppTC = (): AppThunk => async (dispatch) => {
  try {
    await dispatch(getPostsTC());

    if (getToken('access')) {
      await dispatch(getUserInfoTC());
      dispatch(setAuthAC(true));
    }
  } catch (e) {
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
