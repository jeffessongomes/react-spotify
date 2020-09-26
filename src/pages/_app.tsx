import React from 'react';
import { AppProps } from 'next/app';

import GlobalStyled from '../styles/global';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <GlobalStyled />
  </>
);

export default MyApp;
