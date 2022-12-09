import "../styles/globals.css";
import React from "react";
import Head from "next/head";

import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Investment Calculator Clone</title>
        <meta
          name="description"
          content="Investment Calculator Clone Nsikan Akpan"
          key="desc"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content="Investment Calculator Clone Nsikan Akpan"
        />
        <meta
          property="og:description"
          content="Investment Calculator Clone Nsikan Akpan"
        />
        <meta name="robots" content="all" />
        <meta name="googlebot" content="noindex,nofollow" />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
        <meta name="author" content="Nsikan Akpan" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
