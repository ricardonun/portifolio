import "../styles/globals.css";
import { Merriweather_Sans } from "@next/font/google";

import type { AppProps } from "next/app";

const merriweather_Sans = Merriweather_Sans()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={merriweather_Sans.className}>
      <Component {...pageProps} />
    </main>
  );
}
