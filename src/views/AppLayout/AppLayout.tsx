import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer, Header } from '../../common';
import { AppLayoutContainer } from './styled';
import type { UserModel } from '../../types';

interface AppLayoutProps {
  user: UserModel;
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
