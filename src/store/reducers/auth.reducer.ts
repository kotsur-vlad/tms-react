import type { AuthActions } from '../actions';
import type { ErrorModel } from '../../types/models/error.model';
import type { RegisterDTO } from '../../services/api/auth';

const initialState = {
  auth: false,
  error: null,
};

type InitialState = {
  auth: boolean;
  error: null | ErrorModel<RegisterDTO>;
};

export const authReducer = (
  state: InitialState = initialState,
  action: AuthActions
): InitialState => {
  switch (action.type) {
    case 'auth/SET_AUTH':
      return {
        ...state,
        auth: action.payload,
      };

    case 'auth/LOGOUT':
      return {
        ...state,
        auth: false,
      };

    case 'auth/SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
