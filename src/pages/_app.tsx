import type { AppProps } from "next/app";
import type { ReactElement } from "react";
import "../styles/index.css";

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />;
}
