import { FC } from 'react';
import { Route, Routes as RoutesSource } from 'react-router-dom';

import { ProtectedRoute } from './ProtectedRoute';
import { AppLayout, LoginContainer, Post, Posts, Register, ResetPassword } from '../views';
import type { TODO_ANY } from '../types';

interface RoutesProps {
  store: TODO_ANY;
}

export const Routes: FC<RoutesProps> = (props) => {
  const { store } = props;

  return (
    <RoutesSource>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<div>HOME PAGE</div>} />

        {/*Первый вариант - обернуть защищаемые страницы Роутом, у которого*/}
        {/*в качестве element передан наш ProtectedRoute*/}
        <Route element={<ProtectedRoute isAllow={store.auth} pathToRedirect="/" />}>
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:postId" element={<Post />} />
        </Route>

        {/*Второй вариант - оборачивать защищаемую страницу, внутри свойства element*/}
        {/*<Route*/}
        {/*  path="posts"*/}
        {/*  element={*/}
        {/*    <ProtectedRoute isAllow={store.auth} pathToRedirect="/">*/}
        {/*      <Posts posts={store.posts} />*/}
        {/*    </ProtectedRoute>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="posts/:postId"*/}
        {/*  element={*/}
        {/*    <ProtectedRoute isAllow={store.auth} pathToRedirect="/">*/}
        {/*      <Post />*/}
        {/*    </ProtectedRoute>*/}
        {/*  }*/}
        {/*/>*/}

        <Route path="login" element={<LoginContainer />} />
        <Route path="register" element={<Register />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>
    </RoutesSource>
  );
};
