import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';

import { Cities } from '../../components/Cities';
import { Content } from '../../components/Content';
import { ContinentBanner } from '../../components/ContinentBanner';
import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';

export default function Continent() {
  const { isFallback, asPath } = useRouter();

  const continent = asPath.split('/')[2];
  const continent2 = continent.charAt(0).toUpperCase() + continent.slice(1);

  if (isFallback) {
    return <Loading />;
  }

  return (
    <Flex direction="column">
      <Head>
        <title>WorldTrip - {continent2} </title>
      </Head>

      <Header />
      <ContinentBanner />

      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
        <Content />
        <Cities />
      </Flex>
    </Flex>
  );
}
