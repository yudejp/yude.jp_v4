import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <meta name="color-scheme" content="light dark" />
        <link rel="shortcut icon" href="/assets/images/yudejp.png" />
        <link rel="stylesheet" type="text/css" href="/assets/css/XP.css" />
      </Head>
      <body style={{ marginLeft: `clamp(3px, 5%, 150px);`, marginRight: `clamp(3px, 5%, 150px);` }}>
        <Main />

        <NextScript />
        <script defer src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossOrigin="anonymous"></script>
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossOrigin="anonymous"></script>
      </body>
    </Html>
  )
}
