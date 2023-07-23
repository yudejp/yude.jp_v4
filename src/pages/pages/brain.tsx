import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

import Ogp from "@/pages/components/Ogp";
import Seo from "@/pages/components/Seo";
import Title from "@/pages/components/Title";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function Brain() {
  const [start, setStart] = useState(false);
  const [index, setIndex] = useState(0);

  const rouletteContents = [
    "SHARP Brain",
    "SHARP <span style='font-family: serif'>Brian</span>",
    "SHARP <span style='font-family: serif'>Brine</span>",
    "SHARP <span style='font-family: serif'>Bran</span>",
    "SHARP <span style='font-family: serif'>Brains</span>",
    "SHARP <span style='font-family: serif'>Braio</span>",
    "SHARP <span style='font-family: serif'>B rain</span>",
    "SHARP <span style='font-family: serif'>BIAIN</span>",
    "<span style='font-family: serif'>【け】</span> SHARP 電子辞書 : <span style='font-family: serif'>初期設定画面が黄ばんでいます</span>",
    "EX <span style='font-family: serif'>WORLD</span> XD-SC4300",
    "<span style='font-family: serif'>KASIO</span> EX-word",
    "<span style='font-family: serif'>SHARP</span> EX-word",
    "<span style='font-family: serif'>EX word Brain</span>",
    "<span style='font-family: serif'>CASIO Brain</span>",
    "<span style='font-family: serif'>SHAPR</span> Brain",
    "<span style='font-family: serif'>SHAPE</span> 電子辞書 Brain",
    "<span style='font-family: serif'>CAISO</span> EX-word",
    "EX-<span style='font-family: serif'>ward</span>",
    "CASIO EX-<span style='font-family: serif'>Wrod</span>",
    "CASIO <span style='font-family: serif'>DX</span>-word",
    "CASIO <span style='font-family: serif'>RX</span>-word",
    "CASIO <span style='font-family: serif'>WX</span>-word",
    "CASIO <span style='font-family: serif'>FX</span>-word",
    "<span style='font-family: serif'>EZ-ward</span> DATAPLUS2 CASIO",
    "CASIO <span style='font-family: serif'>EV</span>-word",
    "<span style='font-family: serif'>es</span>-word dataplus6",
    "<span style='font-family: serif'>EK</span>-word",
    "CASIO <span style='font-family: serif'>CX</span>-word",
    "カシオ 電子辞書 <span style='font-family: serif'>EG</span>-Word",
    "CASIO EX-word<span style='font-family: serif'>s</span>",
    "CASIO ex-<span style='font-family: serif'>worx</span>",
    "XD-D4800 <span style='font-family: serif'>イーエックスワード</span>",
    "CASIO EX-word <span style='font-family: serif'>DATE</span>PLUS 10",
    "casio data<span style='font-family: serif'>puls</span> 10",
    "EX word DATA<span style='font-family: serif'>PULAS</span> 10",
    "CASIO EX-word DATA<span style='font-family: serif'>PULUS</span>7",
    "EX-word DATA<span style='font-family: serif'>PULS</span>10",
    "CASIO 電子辞書 <span style='font-family: serif'>word</span>",
    "<span style='font-family: serif'>Canon</span> EX-word",
    "Canon <span style='font-family: serif'>wordbank</span> IDP-700G",
    "CANON <span style='font-family: serif'>WORDTNAK</span> V90",
    "Canon <span style='font-family: serif'>wardtank</span> IDP-700G",
    "電子辞書 <span style='font-family: serif'>WODRTANK</span> IDP-610J",
    "Canon <span style='font-family: serif'>wordrank</span>",
    "電子手帳 <span style='font-family: serif'>cannon</span> wordtank v30",
    "<span style='font-family: serif'>SHARP</span> 電子辞書 Canon Word tank V35",
    "CANON WordtankG90 <span style='font-family: serif'>電子事象</span>",
    "<span style='font-family: serif'>でんしじしょ</span>",
    "<span style='font-family: serif'>シャー</span>電子辞書",
    "<span style='font-family: serif'>シヤープ</span>電子辞書",
    "<span style='font-family: serif'>CAIO</span> 辞書 EX <span style='font-family: serif'>WORLD</span>",
    "電子辞書<span style='font-family: serif'>上級高校生</span>CASIO",
    "<span style='font-family: serif'>CAS</span>電子辞書",
    "<span style='font-family: serif'>SONY</span> 電子辞書 Brain",
    "<span style='font-family: serif'>CADIO</span> 電子辞書",
    "<span style='font-family: serif'>電気</span>辞書 CASIO",
    "Canon 電子辞書 <span style='font-family: serif'>wordtonk</span>",
  ];

  const startRoulette = useCallback(() => {
    setStart(!start);
  }, [start]);

  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        setIndex((oldIndex) => {
          if (oldIndex < rouletteContents.length - 1) return oldIndex + 1;
          return 0;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [start]);

  return (
    <>
      <Title title="あり得ない電子辞書の名前ルーレット" />
      <Ogp title="あり得ない電子辞書の名前ルーレット" />
      <Seo title="あり得ない電子辞書の名前ルーレット" />

      <div className="text-center mt-5 mb-5" style={{ minHeight: "400px" }}>
        <p className="fs-4">あり得ない電子辞書の名前ルーレット</p>
        <p
          className="fs-1"
          dangerouslySetInnerHTML={{ __html: rouletteContents[index] }}
        ></p>
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={startRoulette}
        >
          {start ? "ストップ" : "スタート"}
        </button>
        <p className="mt-3">
          <a
            href={
              "https://twitter.com/intent/tweet?text=" +
              rouletteContents[index]
                .replace("<span style='font-family: serif'>", "")
                .replace("</span>", "") +
              " https://www.yude.jp/pages/brain"
            }
          >
            <FontAwesomeIcon icon={faTwitter} width={40} />
            ツイート
          </a>
        </p>
        <p>
          <Link href="https://scrapbox.io/brain-hackers/%E7%8F%8D%E5%87%BA%E5%93%81%E3%81%BE%E3%81%A8%E3%82%81">
            珍出品まとめ - brain-hackers
          </Link>
        </p>
      </div>
    </>
  );
}

export default Brain;
