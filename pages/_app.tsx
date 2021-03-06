import type { AppProps } from 'next/app';

import { DesignSystemProvider } from '../src';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DesignSystemProvider>
      <Component {...pageProps} />
    </DesignSystemProvider>
  );
}

export default MyApp;
