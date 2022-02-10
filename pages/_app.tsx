import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { PrismicProvider } from '@prismicio/react';
import * as prismic from '@prismicio/client';

const endpoint = prismic.getEndpoint('pandpanda-test');
const client = prismic.createClient(endpoint);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
