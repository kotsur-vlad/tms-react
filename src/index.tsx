import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import './assets/fonts/Inter/inter.css';

import { LanguageProvider } from './context/LanguageContext';
import { theme, GlobalStyles } from './styles';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// Second TS variant
// const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>
);
