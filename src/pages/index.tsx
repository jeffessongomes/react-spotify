import React from 'react';

import Head from 'next/head';

import { Content } from '../styles/pages/Home';

import Footer from '../components/Footer';
import Menu from '../components/Menu';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Escutar muda tudo - Spotify</title>
    </Head>
    <Menu />
    <Content>
      <h1>Escutar muda tudo</h1>
      <p>Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito.</p>
      <a href="/">OBTENHA O SPOTIFY FREE</a>
    </Content>
    <Footer />
  </>
);

export default Home;
