// pages/_document.js

import Document, {Html, Head, Main, NextScript} from "next/document";

class ThemeDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=optional"
          />
        </Head>
        <body className="dark:bg-zinc-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default ThemeDocument;
