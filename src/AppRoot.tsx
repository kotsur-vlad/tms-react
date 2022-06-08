import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { createBrowserHistory } from 'history';

import './assets/fonts/Inter/inter.css';

import { LanguageProvider } from './context/LanguageContext';
import { GlobalStyles, theme } from './styles';
import { Routes } from './router/Routes';
import { store } from './store';

export const history = createBrowserHistory({ window });

export const AppRoot: FC = () => {
  return (
    <>
      <Provider store={store}>
        <HistoryRouter history={history}>
          <LanguageProvider>
            <ThemeProvider theme={theme}>
              <GlobalStyles />
              <Routes />
            </ThemeProvider>
          </LanguageProvider>
        </HistoryRouter>
      </Provider>
    </>
  );
};
