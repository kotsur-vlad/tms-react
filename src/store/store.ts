import { combineReducers, createStore } from 'redux';

import { authReducer, postsReducer, userReducer } from './reducers';
import { LOGOUT } from './types';

const combinedReducer = combineReducers({
  auth: authReducer,
  posts: postsReducer,
  user: userReducer,
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    // const postsState = state.posts; // save posts state after logout
    state = {};
    // state = { ...state, posts: postsState };
  }

  return combinedReducer(state, action);
};

export const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// можно вернуть функцию для отмены подписки на изменения store
// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// });
//
// setTimeout(() => {
//   unsubscribe();
//   console.log('unsubscribed');
// }, 1000);

// @ts-ignore
window.store = store;
