import { applyMiddleware, combineReducers, createStore, Middleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from '@redux-devtools/extension';

import { authReducer, postsReducer, userReducer } from './reducers';
import { AuthActions, PostsActions, UserActions } from './actions';
import { LOGOUT } from './types';

const combinedReducer = combineReducers({
  auth: authReducer,
  posts: postsReducer,
  user: userReducer,
});

// @ts-ignore
const rootReducer = (state, action: AppActions) => {
  if (action.type === LOGOUT) {
    // const postsState = state.posts; // save posts state after logout
    state = {};
    // state = { ...state, posts: postsState };
  }

  return combinedReducer(state, action);
};

const composeEnhancers = composeWithDevTools({
  traceLimit: 20,
  trace: true,
});

let middlewares: Middleware[] = [thunk];
if (process.env.NODE_ENV === 'development') {
  middlewares = [...middlewares, logger];
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

export type AppState = ReturnType<typeof rootReducer>;
type AppActions = AuthActions | PostsActions | UserActions;

// @ts-ignore
window.store = store;
