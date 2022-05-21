import { ADD_POST, GET_POSTS, SET_CURRENT_POST } from '../types';
import type { PostModel } from '../../types';

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
        currentPost: state.posts.find((p: PostModel) => p.id === action.payload),
      };

    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };

    default:
      return state;
  }
};
