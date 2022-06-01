import api from '../../services';
import type { PostModel } from '../../types';
import type { AppThunk } from '../store';

export const setPostsAC = (payload: PostModel[]) => {
  return {
    type: 'posts/SET_POSTS',
    payload,
  } as const;
};

export const setCurrentPostAC = (payload: Omit<PostModel, 'isLiked'>) => {
  return {
    type: 'posts/SET_CURRENT_POST',
    payload,
  } as const;
};

export const addPostAC = (payload: PostModel) => {
  return {
    type: 'posts/ADD_POST',
    payload,
  } as const;
};

export const addPostToFavsAC = (payload: number) => {
  return {
    type: 'posts/ADD_POST_TO_FAVOURITES',
    payload,
  } as const;
};

export const removePostFromFavsAC = (payload: number) => {
  return {
    type: 'posts/REMOVE_POST_FROM_FAVOURITES',
    payload,
  } as const;
};

export const togglePostLikeAC = (payload: { id: number; value: boolean }) => {
  return {
    type: 'posts/TOGGLE_POST_LIKE',
    payload,
  } as const;
};

export const setLoadingAC = (payload: boolean) => {
  return {
    type: 'posts/SET_LOADING',
    payload,
  } as const;
};

export const getPostsTC = (): AppThunk => async (dispatch) => {
  dispatch(setLoadingAC(true));

  try {
    const response = await api.blog.getPosts();

    if (response.status === 200) {
      dispatch(setPostsAC(response.data.results));
      dispatch(setLoadingAC(false));

      return response;
    }

    throw new Error();
  } catch (e) {
    console.error(e);
    dispatch(setLoadingAC(false));
    return e;
  }
};

export const getPostTC =
  (id: number): AppThunk =>
  async (dispatch) => {
    dispatch(setLoadingAC(true));

    try {
      const response = await api.blog.getPost(id);

      if (response.status === 200) {
        dispatch(setCurrentPostAC(response.data));
        dispatch(setLoadingAC(false));

        return response;
      }

      throw new Error();
    } catch (e) {
      console.error(e);
      dispatch(setLoadingAC(false));
      return e;
    }
  };

export const addPostsTC =
  (newPost: PostModel): AppThunk =>
  async (dispatch) => {
    dispatch(setLoadingAC(true));
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(newPost),
    };

    try {
      const response = await fetch(url, options);

      if (response.ok) {
        // const json = await response.json();
        // dispatch(setPostsAC(json));
        dispatch(setLoadingAC(false));

        return response;
      }

      throw new Error();
    } catch (e) {
      console.error('Ошибка:' + e);
      dispatch(setLoadingAC(false));
      return e;
    }
  };

//
type SetPosts = ReturnType<typeof setPostsAC>;
type SetCurrentPost = ReturnType<typeof setCurrentPostAC>;
type AddPost = ReturnType<typeof addPostAC>;
type AddPostToFavs = ReturnType<typeof addPostToFavsAC>;
type RemovePostFromFavs = ReturnType<typeof removePostFromFavsAC>;
type TogglePostLike = ReturnType<typeof togglePostLikeAC>;
type SetLoading = ReturnType<typeof setLoadingAC>;

export type PostsActions =
  | SetPosts
  | SetCurrentPost
  | AddPost
  | AddPostToFavs
  | RemovePostFromFavs
  | TogglePostLike
  | SetLoading;
