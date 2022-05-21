import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer, Header } from '../../common';
import { AppLayoutContainer } from './styled';

export const AppLayout: FC = () => {
  return (
    <AppLayoutContainer>
      <Header />

      <Outlet />

      <Footer />
    </AppLayoutContainer>
  );
};
