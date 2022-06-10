// pages/_document.js

import Document, {Html, Head, Main, NextScript} from "next/document";

class ThemeDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=optional"
          />
        </Head>
        <body className="dark:bg-zinc-800 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default ThemeDocument;
