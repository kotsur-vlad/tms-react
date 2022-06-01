import { AxiosError } from 'axios';

import api from '../../services';
import { LOGOUT, SET_AUTH, SET_ERROR } from '../types';
import type { RegisterDTO } from '../../services/api/auth';
import type { ErrorModel } from '../../types/models/error.model';

export const logoutAC = (): LogoutAction => ({ type: LOGOUT });

export const setAuthAC = (isAuth: boolean): SetAuthAction => ({ type: SET_AUTH, payload: isAuth });

export const setErrorAC = (error: ErrorModel<RegisterDTO>): SetErrorAction => ({
  type: SET_ERROR,
  payload: error,
});

export const registerTC = (data: RegisterDTO) => async (dispatch: any) => {
  const response = await api.auth.register(data);

  try {
    if (response.status === 201) {
      console.log(response.data);
      return response;
    }

    throw new Error();
  } catch (e) {
    // TODO: chech erro
    if (e instanceof AxiosError) {
      dispatch(setErrorAC(e.response?.data));
      return e;
    } else {
      console.error(e);
      return e;
    }
  }
};

//region Types
type LogoutAction = { type: typeof LOGOUT };
type SetAuthAction = { type: typeof SET_AUTH; payload: boolean };
type SetErrorAction = { type: typeof SET_ERROR; payload: ErrorModel<RegisterDTO> };
//endregion

export type AuthActions = SetAuthAction | LogoutAction | SetErrorAction;
