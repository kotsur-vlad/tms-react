import { GET_POSTS, SET_CURRENT_POST } from '../types';

const initialState = {
  posts: [],
  currentPost: null,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case SET_CURRENT_POST:
      return {
        ...state,
        currentPost: action.payload,
      };
  }

  return state;
};
