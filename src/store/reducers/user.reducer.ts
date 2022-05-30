import { UserActions } from '../actions';
import type { UserModel } from '../../types';

// const initialState = {
//   user: {
//     id: '',
//     username: '',
//     email: '',
//   },
// };

const initialState = {
  user: null,
};

type InitialState = {
  user: null | UserModel;
};

export const userReducer = (state: InitialState = initialState, action: UserActions) => {
  switch (action.type) {
    case 'user/GET_USER':
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
