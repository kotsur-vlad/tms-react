import { createStore, combineReducers } from 'redux';
import { postsReducer, userReducer } from './reducers';

const rootReducer = combineReducers({
  posts: postsReducer,
  user: userReducer,
});

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
