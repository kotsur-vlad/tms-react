import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes as RoutesSource } from 'react-router-dom';

import { authStatusSelector, getPostsAC, getUserAC, setAuthAC } from '../store';
import { _store } from '../AppRoot';

import { ProtectedRoute } from './ProtectedRoute';
import {
  AddPost,
  AppLayout,
  LoginContainer,
  Page404,
  Post,
  Posts,
  Register,
  ResetPassword,
} from '../views';

export const Routes: FC = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(authStatusSelector);

  useEffect(() => {
    dispatch(setAuthAC(true));
    dispatch(getPostsAC(_store.posts));
    dispatch(getUserAC(_store.user));

    // типичные ошибки при с dispatch:
    // dispatch(getPostsAC);
    // getPostsAC('value');
  }, []);

  return (
    <RoutesSource>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<div>HOME PAGE</div>} />

        <Route path="posts" element={<Posts />} />
        <Route path="posts/:postId" element={<Post />} />

        <Route element={<ProtectedRoute isAllow={isAuth} pathToRedirect="/" />}>
          <Route path="add-post" element={<AddPost />} />
        </Route>

        <Route path="login" element={<LoginContainer />} />
        <Route path="register" element={<Register />} />
        <Route path="reset-password" element={<ResetPassword />} />

        <Route path="*" element={<Page404 />} />
      </Route>
    </RoutesSource>
  );
};
