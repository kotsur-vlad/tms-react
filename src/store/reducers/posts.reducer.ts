import { mapPostsIntoView } from '../utils';
import type { PostModel } from '../../types';
import type { PostsActions } from '../actions';

const initialState = {
  posts: [],
  favourites: [],
  currentPost: null,
  loading: false,
};

type InitialState = {
  posts: PostModel[];
  favourites: PostModel[];
  currentPost: null | PostModel;
  loading: boolean;
};

export const postsReducer = (
  state: InitialState = initialState,
  action: PostsActions
): InitialState => {
  switch (action.type) {
    case 'posts/SET_POSTS':
      return {
        ...state,
        posts: mapPostsIntoView(action.payload),
      };

    case 'posts/SET_CURRENT_POST':
      return {
        ...state,
        currentPost: state.posts.find((p: PostModel) => p.id === action.payload)!,
      };

    case 'posts/ADD_POST':
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };

    case 'posts/ADD_POST_TO_FAVOURITES':
      return {
        ...state,
        favourites: [
          ...state.favourites,
          state.posts.find((p: PostModel) => p.id === action.payload)!,
        ],
      };

    case 'posts/REMOVE_POST_FROM_FAVOURITES':
      return {
        ...state,
        favourites: state.favourites.filter((p: PostModel) => p.id !== action.payload),
      };

    case 'posts/TOGGLE_POST_LIKE':
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

    case 'posts/SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};
