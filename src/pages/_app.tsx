import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import type { AppProps } from 'next/app'

import { RecoilRoot } from "recoil";
import React, { useEffect, useCallback, useState } from "react";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Theme from "./components/ThemeProvider"
import { konamiState } from './components/KonamiProvider'
import { useRecoilState } from 'recoil'

function Konami() {
  const [_, setKonami] = useRecoilState(konamiState);

  const [keys, setKeys] = useState<KeyboardEvent["keyCode"][]>([])

  const targetKeys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

  const keyFunc = useCallback((event: KeyboardEvent) => {
    console.log("This key: " + event.keyCode)
    addKey(event.keyCode)
  }, []);

  const addKey = (key: KeyboardEvent["keyCode"]) => {
    if (typeof key != undefined) {
      setKeys(keys => [...keys, key]);
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", keyFunc, false);
  }, []);

  useEffect(() => {
    if (keys.length > 10) {
      const [_, ...newKeys] = keys;
      setKeys(newKeys)
    }
    console.log(keys);
    if (arraysEqual(keys, targetKeys)) {
      setKonami(true)
    }
  }, [keys])

  return null
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Navbar />
      <Konami />
      <Theme>
        <Component {...pageProps} />
      </Theme>
      <Footer />
    </RecoilRoot>
  )
}

function arraysEqual(a: KeyboardEvent["keyCode"][], b: KeyboardEvent["keyCode"][]) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
