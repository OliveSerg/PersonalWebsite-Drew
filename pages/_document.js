// pages/_document.js

import Document, {Html, Head, Main, NextScript} from "next/document";

class ThemeDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Josefin+Sans:wght100,200,300,400,500,600,700,800&display=optional"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
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
