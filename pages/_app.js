import "../styles/globals.css";
import "../public/scripts/lib/codemirror.css";
import "codemirror/theme/monokai.css";
import "codemirror/theme/dracula.css";
import "codemirror/theme/zenburn.css";
import "codemirror/theme/ayu-mirage.css";
import "codemirror/theme/blackboard.css";
import "codemirror/theme/base16-light.css";
import "codemirror/theme/eclipse.css";
import "codemirror/theme/mdn-like.css";
import "codemirror/theme/material.css";
import "../public/scripts/addon/fold/foldgutter.css";
import "../public/scripts/addon/lint/lint.css";
import "../public/scripts/addon/hint/show-hint.css";
import Script from "next/dist/client/script";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#0cf07b" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="theme-color" content="#0cf07b" />
      </Head>
      <Component {...pageProps} />
      <Script
        strategy="beforeInteractive"
        src="/scripts/componentScripts/initBody.js"
      />
    </>
  );
}

export default MyApp;
