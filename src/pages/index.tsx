import Head from 'next/head';
import { Flex, Heading } from '@chakra-ui/react';

import { Banner } from '../components/Banner';
import { Break } from '../components/Break';
import { Features } from '../components/Features';
import { Header } from '../components/Header';
import { Slider } from '../components/Slider';

export default function Home() {
  return (
    <Flex direction="column">
      <Head>
        <title>WorldTrip - Home</title>
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta property="og:title" content="WorldTrip" />
        <meta name="twitter:title" content="WorldTrip" />
      </Head>

      <Header />
      <Banner />
      <Features />
      <Break />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={['5', '14']}
        fontSize={['lg', '3xl', '4xl']}
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>

      <Slider />
    </Flex>
  );
}
