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

export const _store = {
  auth: true,
  posts: [
    {
      id: 1,
      image:
        'https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_16.11.10.png',
      text: 'Posts text...',
      date: '2021-10-06',
      lesson_num: 123,
      title: 'Post text title.....',
      author: 7,
      isLiked: null,
    },
    {
      id: 2,
      image: 'https://www.sitesaga.com/wp-content/uploads/2020/04/whatisablog.png',
      text: 'Second post text...',
      date: '2021-02-10',
      lesson_num: 123,
      title: 'Second post title.....',
      author: 7,
      isLiked: null,
    },
    {
      id: 3,
      image:
        'https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_16.11.10.png',
      text: 'Third Posts text...',
      date: '2021-11-22',
      lesson_num: 123,
      title: 'Third Post text title.....',
      author: 7,
      isLiked: null,
    },
  ],
  user: {
    id: 1,
    username: 'Ivan Ivanov',
    email: 'ivan@mail.ru',
  },
};

export const AppRoot: FC = () => {
  return (
    <React.StrictMode>
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
    </React.StrictMode>
  );
};
