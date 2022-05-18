import { CLEAR_USER } from '../types';

const initialState = {
  user: {
    id: '1',
    username: 'Ivan Ivanov',
    email: 'ivan@mail.ru',
  },
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_USER:
      return null;
  }

  return state;
};
