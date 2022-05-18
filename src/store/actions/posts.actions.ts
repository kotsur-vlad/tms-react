import { GET_POSTS } from '../types';

export const getPostsAC = (payload) => {
  return {
    type: GET_POSTS,
    payload,
  };
};

// const addUser = { type: 'user/ADD_USER', payload: [] };
