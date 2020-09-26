import React from 'react';
import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import GlobalStyled from '../styles/global';
import theme from '../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    <GlobalStyled />
  </ThemeProvider>
);

export default MyApp;
