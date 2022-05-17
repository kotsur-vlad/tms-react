import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer, Header } from '../../common';
import { AppLayoutContainer } from './styled';
import type { TODO_ANY } from '../../types';

interface AppLayoutProps {
  user: TODO_ANY;
}

export const AppLayout: FC<AppLayoutProps> = (props) => {
  const { user } = props;

  return (
    <AppLayoutContainer>
      <Header user={user} />

      <Outlet />

      <Footer />
    </AppLayoutContainer>
  );
};
