import { createSelector } from 'reselect';

// posts
export const authStateSelector = (state) => state.auth;
export const authStatusSelector = createSelector(authStateSelector, (state) => state.auth);

// posts
export const postsStateSelector = (state) => state.posts;
export const currentPostSelector = createSelector(postsStateSelector, (state) => state.currentPost);
export const allPostsSelector = createSelector(postsStateSelector, (state) => state.posts);
export const favouritesPostsSelector = createSelector(
  postsStateSelector,
  (state) => state.favourites
);

//user
export const userStateSelector = (state) => state.user;
export const userInfoSelector = createSelector(userStateSelector, (state) => state.user);
