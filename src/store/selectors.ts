import { createSelector } from 'reselect';
import type { AppState } from './store';

// posts
export const authStateSelector = (state: AppState) => state.auth;
export const authStatusSelector = createSelector(authStateSelector, (state) => state.auth);

// posts
export const postsStateSelector = (state: AppState) => state.posts;
export const currentPostSelector = createSelector(postsStateSelector, (state) => state.currentPost);
export const allPostsSelector = createSelector(postsStateSelector, (state) => state.posts);
export const favouritesPostsSelector = createSelector(
  postsStateSelector,
  (state) => state.favourites
);
export const postsLoadingSelector = createSelector(postsStateSelector, (state) => state.loading);

//user
export const userStateSelector = (state: AppState) => state.user;
export const userInfoSelector = createSelector(userStateSelector, (state) => state.user);
