import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>codeCollab - Edit, Share Code and Collaborate!</title>
        <meta
          name="title"
          content="codeCollab - Edit, Share Code and Collaborate!"
        />
        <meta
          name="description"
          content="Write, share code and collaborate with other developers!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://code-collab.vercel.app/" />
        <meta
          property="og:title"
          content="codeCollab - Edit, Share Code and Collaborate!"
        />
        <meta
          property="og:description"
          content="Write, share code and collaborate with other developers!"
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://code-collab.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="codeCollab - Edit, Share Code and Collaborate!"
        />
        <meta
          property="twitter:description"
          content="Write, share code and collaborate with other developers!"
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,400&family=Major+Mono+Display&family=Nova+Mono&family=Syne+Mono&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
