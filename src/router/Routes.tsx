import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes as RoutesSource } from 'react-router-dom';

import { authStatusSelector, initAppTC, useAppDispatch } from '../store';

import { ProtectedRoute } from './ProtectedRoute';
import {
  Activation,
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
    dispatch(initAppTC());
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

        <Route element={<ProtectedRoute isAllow={!isAuth} pathToRedirect="/posts" />}>
          <Route path="login" element={<LoginContainer />} />
          <Route path="register" element={<Register />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="activate/:uid/:token" element={<Activation />} />
        </Route>

        <Route path="*" element={<Page404 />} />
      </Route>
    </RoutesSource>
  );
};
