import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes as RoutesSource } from 'react-router-dom';

import { authStatusSelector, getPostsTC, getUserAC, setAuthAC, useAppDispatch } from '../store';
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
  const dispatch = useAppDispatch();
  const isAuth = useSelector(authStatusSelector);

  useEffect(() => {
    dispatch(setAuthAC(true));
    // dispatch(setPostsAC(_store.posts));
    dispatch(getPostsTC());
    dispatch(getUserAC(_store.user));
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
