import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import {StyleProvider} from "@ant-design/cssinjs";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
        <StyleProvider ssrInline={true}>

            <Main />
            <NextScript />
        </StyleProvider>

        </body>
      </Html>
    )
  }
}

export default MyDocument
