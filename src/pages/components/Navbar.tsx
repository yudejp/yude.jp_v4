import React, { useState, useEffect } from "react";
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
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";

import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Link from "next/link";

import { useTheme } from "@/lib/theme";
import { QueryResult, Blog } from "@/types/blog";

import Logo from "./Logo";

export default function Navbar() {
  const isKonami = useRecoilValue(konamiState);

  const [isFocus, setFocus] = useState(false);
  const showDropdown = () => setFocus(true);
  const hideDropdown = () => setFocus(false);

  const { theme, toggleTheme } = useTheme();

  const [query, setQuery] = useState("");
  const [queryLoading, setQueryLoading] = useState(false);
  const [queryRes, setQueryRes] = useState<QueryResult>();
  const [currentTab, setCurrentTab] = useState("other-content");

  const handleQueryChange = (e: { target: { value: string } }) => {
    setQuery(() => e.target.value);
  };

  const handleTabChange = (eventKey: string | null) => {
    if (eventKey) {
      setCurrentTab(eventKey);
    }
  };

  useEffect(() => {
    if (query != "") {
      setCurrentTab("query-result");
      setQueryLoading(true);
      fetch("/api/searchFromBlog?keyword=" + query)
        .then((res) => res.json())
        .then((data) => {
          setQueryRes(data);
          console.log("query: " + query);
          console.log(data);
          setQueryLoading(false);
        });
    }
  }, [query]);

  return (
    <>
      {isKonami && <Konami />}
      <div className="container mt-4">
        <div className="mx-auto" style={{ maxWidth: "500px" }}>
          <div className="mx-auto" style={{ maxWidth: "50px" }}>
            <Link
              className="nav-link color-drop"
              href="/"
              tabIndex={-1}
              style={{ marginLeft: "-40px" }}
            >
              <Logo />
            </Link>
          </div>
          <div className="mx-auto" style={{ width: "100%" }}>
            <Form>
              <Form.Group controlId="formSearchInput" style={{}}>
                <Form.Control
                  className="search-area"
                  onFocus={showDropdown}
                  type="text"
                  placeholder="ここをクリックして遷移 または 入力してください..."
                  autoComplete="off"
                  onChange={handleQueryChange}
                />
              </Form.Group>
            </Form>
          </div>
        </div>
        <ul className="nav justify-content-center mt-3">
          <li className="nav-item">
            <Link href="/blog" legacyBehavior>
              <a className="nav-link" aria-current="page">
                <FontAwesomeIcon icon={faBlog} width={20} /> ブログ
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/profile" legacyBehavior>
              <a className="nav-link">
                <FontAwesomeIcon icon={faUser} width={20} /> プロフィール
              </a>
            </Link>
          </li>
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
        </ul>
      </div>

      {isFocus && (
        <div
          className="card position-absolute top-30 start-50 translate-middle-x w-100"
          style={{ zIndex: 2000, maxWidth: "50rem" }}
        >
          <Nav
            variant="pills"
            activeKey={currentTab}
            onSelect={handleTabChange}
          >
            <Nav.Item>
              <Nav.Link eventKey="other-content" href="#">
                コンテンツ
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="external-links" href="#">
                外部リンク
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="query-result" href="#">
                検索結果
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={hideDropdown}>閉じる</Nav.Link>
            </Nav.Item>
          </Nav>
          {currentTab === "other-content" && (
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className="d-block">
                  <FontAwesomeIcon icon={faBook} width={20} />{" "}
                  <Link href="/pages" onClick={hideDropdown}>
                    ページ
                  </Link>
                </span>
                <small className="text-muted d-block">
                  雑多なコンテンツ（覚書やおふざけ等）
                </small>
              </li>
              <li className="list-group-item">
                <span className="d-block">
                  <FontAwesomeIcon icon={faBomb} width={20} />{" "}
                  <Link href="/apps" onClick={hideDropdown}>
                    アプリ
                  </Link>
                </span>
                <small className="text-muted d-block">ゴミ なにこれ？</small>
              </li>
              <li className="list-group-item">
                <span className="d-block">
                  <FontAwesomeIcon icon={faStar} width={20} />{" "}
                  <Link href="/services" onClick={hideDropdown}>
                    サービス
                  </Link>
                </span>
                <small className="text-muted d-block">
                  yude.jp が保有するリソースで提供中のサービス
                </small>
              </li>
              <li className="list-group-item">
                <span className="d-block">
                  <FontAwesomeIcon icon={faServer} width={20} />{" "}
                  <Link href="/servers" onClick={hideDropdown}>
                    サーバー
                  </Link>
                </span>
                <small className="text-muted d-block">
                  ゆでハウスなどで稼働中の自宅サーバーまたはクラウド上に存在する計算資源
                </small>
              </li>
              <li className="list-group-item">
                <span className="d-block">
                  <FontAwesomeIcon icon={faLink} width={20} />{" "}
                  <Link href="/links" onClick={hideDropdown}>
                    リンク集
                  </Link>
                </span>
                <small className="text-muted d-block">
                  相互リンクや、勝手に貼り付けたリンク
                </small>
              </li>
              <li className="list-group-item">
                <span className="d-block">
                  <FontAwesomeIcon icon={faNewspaper} width={20} />{" "}
                  <Link href="/tos" onClick={hideDropdown}>
                    yude.jp サービス利用規約
                  </Link>
                </span>
                <small className="text-muted d-block">
                  yude.jp が運用するサービスの利用規約
                </small>
              </li>
            </ul>
          )}

          {currentTab === "external-links" && (
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className="d-block">
                  <FontAwesomeIcon icon={faDiscord} width={20} />{" "}
                  <a href="https://discord.gg/X6srY7X">Discord サーバー</a>
                </span>
                <small className="text-muted d-block">
                  自由に会話（合法的に）
                </small>
              </li>
              <li className="list-group-item">
                <span className="d-block">
                  <FontAwesomeIcon icon={faGithub} width={20} />{" "}
                  <a href="https://github.com/yudejp">GitHub Organization</a>
                </span>
                <small className="text-muted d-block">
                  大したソースコードを公開
                </small>
              </li>
              <li className="list-group-item">
                <span className="d-block">
                  <FontAwesomeIcon icon={faCheck} width={20} />{" "}
                  <a href="https://status.yude.jp">サービスの稼働状況</a>
                </span>
              </li>
              <li className="list-group-item">
                <span className="d-block">
                  🧅{" "}
                  <a href="http://yudejpwxp2cziclocqjfd55ucw2dh6ncswopluh7exwusjlfkvkwhwqd.onion/">
                    Tor
                  </a>
                </span>
              </li>
              <li className="list-group-item">
                <span className="d-block">
                  <FontAwesomeIcon icon={faBraille} width={20} />{" "}
                  <a href="http://yude.i2p/?i2paddresshelper=idabfrazqbh7upvo2f5hx3ajpqglrwny66qbvcoatfqoq64ifiaq.b32.i2p">
                    I2P
                  </a>
                </span>
              </li>
              <li className="list-group-item">
                <span className="d-block">
                  Gemini: <code>gemini://g.yude.jp</code>
                </span>
              </li>
              <li className="list-group-item">
                <span className="d-block text-center">
                  <FontAwesomeIcon icon={faHeart} width={20} color="pink" />{" "}
                  <a href="https://pjsekai.sega.jp/character/unite04/nene/index.html">
                    草薙寧々ちゃん
                  </a>{" "}
                  <FontAwesomeIcon icon={faHeart} width={20} color="pink" />
                </span>
              </li>
            </ul>
          )}

          {currentTab === "query-result" && (
            <>
              <span className="text-center d-block">ブログからの検索結果</span>
              {query === "" && (
                <p className="text-center mt-4 mb-4">
                  なにか入力してください...
                </p>
              )}
              {queryLoading && (
                <p className="text-center mt-4 mb-4">
                  結果を読み込んでいます...
                </p>
              )}
              {query != "" && (
                <>
                  <ul>
                    {queryRes &&
                      queryRes.contents.map((content: Blog) => (
                        <>
                          <li>
                            <Link
                              onClick={hideDropdown}
                              href={"/blog/" + content.id}
                            >
                              {content.title}
                            </Link>
                          </li>
                        </>
                      ))}
                  </ul>
                  {queryRes &&
                    queryRes.contents &&
                    Object.keys(queryRes.contents).length === 0 && (
                      <>
                        <span className="text-center d-block mb-2">
                          何も見つかりませんでした。
                        </span>
                      </>
                    )}
                </>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
}
