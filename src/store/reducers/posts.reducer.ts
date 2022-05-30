import {
  ADD_POST,
  ADD_POST_TO_FAVOURITES,
  GET_POSTS,
  REMOVE_POST_FROM_FAVOURITES,
  SET_CURRENT_POST,
  TOGGLE_POST_LIKE,
} from '../types';
import type { PostModel } from '../../types';

const initialState = {
  posts: [],
  favourites: [],
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

    case ADD_POST_TO_FAVOURITES:
      return {
        ...state,
        favourites: [
          ...state.favourites,
          state.posts.find((p: PostModel) => p.id === action.payload),
        ],
      };

    case REMOVE_POST_FROM_FAVOURITES:
      return {
        ...state,
        favourites: state.favourites.filter((p: PostModel) => p.id !== action.payload),
      };

    case TOGGLE_POST_LIKE:
      return {
        ...state,
        posts: state.posts.map((p) =>
          p.id === action.payload.id ? { ...p, isLiked: action.payload.value } : p
        ),
        favourites: state.favourites.map((p) =>
          p.id === action.payload.id ? { ...p, isLiked: action.payload.value } : p
        ),
        currentPost:
          state.currentPost?.id === action.payload.id
            ? { ...state.currentPost, isLiked: action.payload.value }
            : state.currentPost,
      };

    default:
      return state;
  }
};
