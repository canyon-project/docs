import { Html, Head, Main, NextScript } from "next/document";
import {StyleProvider} from "@ant-design/cssinjs";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      <StyleProvider hashPriority="high">
          <Main />
      </StyleProvider>
        <NextScript />
      </body>
    </Html>
  );
}
