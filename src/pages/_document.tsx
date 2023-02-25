import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from './components/Navbar'

export default function Document() {
  return (
    <Html lang="ja">
      <Head />
      <body className="mx-5">
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
