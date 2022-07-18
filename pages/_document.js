import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="title"
          content="codeCollab - Edit, Share Code and Collaborate!"
        />
        <meta
          name="description"
          content="Write, share code and collaborate with other developers!"
        />
        <meta
          name="keywords"
          content="code, editor, online, free, share, collab"
        ></meta>
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
          content="https://code-collab.vercel.app/codeCollab.png"
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
          content="https://code-collab.vercel.app/codeCollab.png"
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
      <body className="preload">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
