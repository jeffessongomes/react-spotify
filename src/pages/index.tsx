import React from 'react';

import Head from 'next/head';

import { Container } from '../styles/pages/Home';

const Home: React.FC = () => (
  <Container>
    <Head>
      <title>Create Next App</title>
    </Head>

    <main>
      <h2>Hello World</h2>
    </main>
  </Container>
);

export default Home;
