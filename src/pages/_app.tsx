import "../styles/globals.css";
import { Merriweather_Sans } from "@next/font/google";

import type { AppProps } from "next/app";
import Head from "next/head";

const merriweather_Sans = Merriweather_Sans();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={merriweather_Sans.className}>
      <Head>
        <title>Ricardo Nunes - Portifolio</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
