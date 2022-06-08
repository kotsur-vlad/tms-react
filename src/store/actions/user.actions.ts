import { AxiosError } from 'axios';

import api from '../../services';
import { AppThunk } from '../store';
import { setAuthAC } from './auth.actions';
import type { UserModel } from '../../types';

export const setUserDataAC = (userInfo: UserModel) =>
  ({ type: 'user/SET_USER_DATA', payload: userInfo } as const);

export const getUserInfoTC = (): AppThunk => async (dispatch) => {
  try {
    const response = await api.auth.getUserInfo();

    if (response.status === 200) {
      dispatch(setAuthAC(true));
      dispatch(setUserDataAC(response.data));
      return response;
    }

    throw new Error();
  } catch (e) {
    if (e instanceof AxiosError) {
      console.error(e.response?.data);
      return e;
    }

    console.error(e);
    return e;
  }
};

//region Types
type GetUser = ReturnType<typeof setUserDataAC>;
export type UserActions = GetUser;
//endregion
