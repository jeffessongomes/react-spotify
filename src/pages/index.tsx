import React from 'react';

import Head from 'next/head';

import { Container } from '../styles/pages/Home';

import Footer from '../components/Footer';
import Menu from '../components/Menu';

const Home: React.FC = () => (
  <Container>
    <Head>
      <title>Escutar muda tudo - Spotify</title>
    </Head>

    <Menu />
  </Container>
);

export default Home;
