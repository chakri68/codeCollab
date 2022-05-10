import "../styles/globals.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
