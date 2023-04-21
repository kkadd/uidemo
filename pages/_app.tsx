import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';

export function Testui({ Component, pageProps }: AppProps) {
  return (
  <NextUIProvider>
    <Component {...pageProps} />
  </NextUIProvider>
  )
}

export default Testui