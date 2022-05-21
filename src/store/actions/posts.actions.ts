import { ADD_POST, GET_POSTS, SET_CURRENT_POST } from '../types';

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
