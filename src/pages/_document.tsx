import { Html, Head, Main, NextScript } from "next/document";
// import {}

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="favicon.png" />
        {/* <meta name="developer" content="https://github.com/dc7devs"/> */}
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}