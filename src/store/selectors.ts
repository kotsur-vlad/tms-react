import { createSelector } from 'reselect';

// posts
export const authSelector = (state) => state.auth;

// posts
export const postsSelector = (state) => state.posts;

//user
export const userSelector = (state) => state.user;
export const userInfoSelector = createSelector(userSelector, (state) => state.user);
