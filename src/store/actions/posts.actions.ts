import {
  ADD_POST,
  ADD_POST_TO_FAVOURITES,
  GET_POSTS,
  REMOVE_POST_FROM_FAVOURITES,
  SET_CURRENT_POST,
} from '../types';

export const getPostsAC = (payload) => {
  return {
    type: GET_POSTS,
    payload,
  };
};

export const setCurrentPostAC = (payload) => {
  return {
    type: SET_CURRENT_POST,
    payload,
  };
};

export const addPostAC = (payload) => {
  return {
    type: ADD_POST,
    payload,
  };
};

export const addPostToFavsAC = (payload) => {
  return {
    type: ADD_POST_TO_FAVOURITES,
    payload,
  };
};

export const removePostFromFavsAC = (payload) => {
  return {
    type: REMOVE_POST_FROM_FAVOURITES,
    payload,
  };
};
