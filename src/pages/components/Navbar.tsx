import React from "react";
import { konamiState } from "@/lib/konami";
import { useRecoilValue } from "recoil";
import Konami from "@/pages/components/Konami";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faUser,
  faBlog,
  faHeart,
  faBraille,
  faCheck,
  faServer,
  faStar,
  faBomb,
  faLink,
  faNewspaper,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faGithub,
  faMastodon,
} from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";

import { useTheme } from "@/lib/theme";

import Logo from "./Logo";

export default function Navbar() {
  const isKonami = useRecoilValue(konamiState);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {isKonami && <Konami />}

      <nav className="navbar border-bottom bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <Link legacyBehavior href="/">
            <a className="navbar-brand">
              <Logo />
            </a>
          </Link>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={toggleTheme}
          >
            {theme === "light" ? (
              <FontAwesomeIcon icon={faMoon} width={25} />
            ) : (
              <FontAwesomeIcon icon={faSun} width={25} />
            )}
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            style={{ zIndex: 5000 }}
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                サイトメニュー
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item mb-2">
                  <Link legacyBehavior href="/blog">
                    <a className="dropdown-item">
                      <FontAwesomeIcon icon={faBlog} width={20} /> ブログ
                    </a>
                  </Link>
                </li>
                <li className="nav-item mb-2 mt-2">
                  <Link legacyBehavior href="/profile">
                    <a className="dropdown-item">
                      <FontAwesomeIcon icon={faUser} width={20} /> プロフィール
                    </a>
                  </Link>
                </li>
                <li className="nav-item mb-2 mt-2">
                  <a className="dropdown-item" href="https://mstdn.soine.site">
                    <FontAwesomeIcon icon={faMastodon} width={20} /> Mastodon
                    インスタンス: mstdn.soine.site
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    その他のコンテンツ
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link legacyBehavior href="/pages">
                        <a className="dropdown-item">
                          <FontAwesomeIcon icon={faBook} width={20} /> ページ
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/apps">
                        <a className="dropdown-item">
                          <FontAwesomeIcon icon={faBomb} width={20} /> アプリ
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/services">
                        <a className="dropdown-item">
                          <FontAwesomeIcon icon={faStar} width={20} /> サービス
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/servers">
                        <a className="dropdown-item">
                          <FontAwesomeIcon icon={faServer} width={20} />{" "}
                          サーバー
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/links">
                        <a className="dropdown-item">
                          <FontAwesomeIcon icon={faLink} width={20} /> リンク集
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/tos">
                        <a className="dropdown-item">
                          <FontAwesomeIcon icon={faNewspaper} width={20} />{" "}
                          yude.jp サービス利用規約
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    外部リンク
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://discord.gg/X6srY7X"
                      >
                        <FontAwesomeIcon icon={faDiscord} width={20} /> Discord
                        サーバー
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://github.com/yudejp"
                      >
                        <FontAwesomeIcon icon={faGithub} width={20} /> GitHub
                        Organization
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://status.yude.jp"
                      >
                        <FontAwesomeIcon icon={faCheck} width={20} />{" "}
                        サービスの稼働状況
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="http://yudejpwxp2cziclocqjfd55ucw2dh6ncswopluh7exwusjlfkvkwhwqd.onion/"
                      >
                        🧅 Tor
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="http://yude.i2p/?i2paddresshelper=idabfrazqbh7upvo2f5hx3ajpqglrwny66qbvcoatfqoq64ifiaq.b32.i2p"
                      >
                        <FontAwesomeIcon icon={faBraille} width={20} /> I2P
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item">
                        Gemini: <code>gemini://g.yude.jp</code>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://pjsekai.sega.jp/character/unite04/nene/index.html"
                      >
                        <FontAwesomeIcon icon={faHeart} width={20} /> 草薙寧々
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
