import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app'

import { RecoilRoot } from "recoil";

import Navbar from './components/Navbar'
import Theme from "./components/ThemeProvider"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Navbar />
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </RecoilRoot>
  )
}
