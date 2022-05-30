import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { AppState, postsLoadingSelector } from '../../store';
import { Footer, Header, Spinner } from '../../common';
import { AppLayoutContainer } from './styled';

export const AppLayout: FC = () => {
  const isLoading = useSelector<AppState, boolean>(postsLoadingSelector);

  return (
    <AppLayoutContainer>
      <Header />

      <Outlet />

      <Footer />

      {isLoading && <Spinner />}
    </AppLayoutContainer>
  );
};
