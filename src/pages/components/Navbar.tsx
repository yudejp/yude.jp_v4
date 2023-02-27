import React, { useState, useEffect, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser, faBlog, faComment, faHeart, faBraille, faCheck, faServer, faStar, faBomb, faLink, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons"

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';

import { useTheme } from '../../lib/theme'
import { QueryResult, Blog } from "@/types/blog";

export default function Navbar() {
    const [isFocus, setFocus] = useState(false);
    const showDropdown = () => setFocus(true);
    const hideDropdown = () => setFocus(false);

    const { theme, toggleTheme } = useTheme();

    const [query, setQuery] = useState('');
    const [queryLoading, setQueryLoading] = useState(false);
    const [queryRes, setQueryRes] = useState<QueryResult>();
    const [currentTab, setCurrentTab] = useState('other-content');

    const handleQueryChange = (e: { target: { value: string; }; }) => {
        setQuery(() => e.target.value)
    }

    const handleTabChange = (eventKey: string | null) => {
        if (eventKey) {
            setCurrentTab(eventKey);
        }
    }

    useEffect(
        () => {
            if (query != "") {
                setCurrentTab("query-result")
                setQueryLoading(true)
                fetch('/api/searchFromBlog?keyword=' + query)
                    .then((res) => res.json())
                    .then((data) => {
                        setQueryRes(data)
                        console.log("query: " + query)
                        console.log(data)
                        setQueryLoading(false)
                    })
            }
        },
        [query]
    );

    return (
        <>
            <div className="container ml-5 mr-5 mt-4 aligns-items-center">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link" href="/" tabIndex={-1}>
                            yude.jp
                        </Link>
                    </li>

                    <Form>
                        <Form.Group controlId="formSearchInput" style={{}}>
                            <Form.Control className="search-area" onFocus={showDropdown} type="text" placeholder="なにをお探しですか？" autoComplete="off" onChange={handleQueryChange} />
                        </Form.Group>
                    </Form>
                    <Button onClick={() => console.log("a")} variant="outline-secondary"><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
                </ul>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link href="/blog" legacyBehavior>
                            <a className="nav-link active" aria-current="page"><FontAwesomeIcon icon={faBlog} width={20} /> ブログ</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/profile" legacyBehavior>
                            <a className="nav-link"><FontAwesomeIcon icon={faUser} width={20} /> プロフィール</a>
                        </Link>
                    </li>
                    <button type="button" className="btn btn-secondary" onClick={toggleTheme}>{theme === "light" ? "🌙" : "🌅"}</button>
                </ul>
            </div>

            {
                isFocus && (
                    <div className="card position-absolute top-30 start-50 translate-middle-x w-100" style={{ zIndex: 2000, maxWidth: "50rem" }}>
                        <Nav variant="pills" activeKey={currentTab} onSelect={handleTabChange}>
                            <Nav.Item>
                                <Nav.Link eventKey="other-content" href="#">
                                    その他のコンテンツ
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
                                <Nav.Link onClick={hideDropdown}>
                                    閉じる
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        {
                            currentTab === "other-content" && (
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <span className="d-block"><FontAwesomeIcon icon={faComment} width={20} /> <Link href="/1ch">1ch</Link></span>
                                        <small className="text-muted d-block">yude.jp における、ふたばちゃんねる</small>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="d-block"><FontAwesomeIcon icon={faBomb} width={20} /> <Link href="/apps">アプリ</Link></span>
                                        <small className="text-muted d-block">ゴミ</small>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="d-block"><FontAwesomeIcon icon={faStar} width={20} /> <Link href="/services">サービス</Link></span>
                                        <small className="text-muted d-block">yude.jp が保有するリソースで提供中のサービス</small>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="d-block"><FontAwesomeIcon icon={faServer} width={20} /> <Link href="/servers">サーバー</Link></span>
                                        <small className="text-muted d-block">ゆでハウスなどで稼働中の自宅サーバー等</small>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="d-block"><FontAwesomeIcon icon={faLink} width={20} /> <Link href="/links">リンク集</Link></span>
                                        <small className="text-muted d-block">相互リンクや、勝手に貼り付けたリンク</small>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="d-block"><FontAwesomeIcon icon={faNewspaper} width={20} /> <Link href="/hcunews">@hcunews について</Link></span>
                                        <small className="text-muted d-block">広島市立大学 Webページの更新通知ボット</small>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="d-block"><FontAwesomeIcon icon={faNewspaper} width={20} /> <Link href="/tos">yude.jp サービス利用規約</Link></span>
                                        <small className="text-muted d-block">yude.jp が運用するサービスの利用規約</small>
                                    </li>
                                </ul>
                            )
                        }

                        {
                            currentTab === "external-links" && (
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <span className="d-block"><FontAwesomeIcon icon={faDiscord} width={20} /> <a href="https://discord.gg/X6srY7X">Discord サーバー</a></span>
                                        <small className="text-muted d-block">自由に会話（合法的に）</small>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="d-block"><FontAwesomeIcon icon={faGithub} width={20} /> <a href="https://github.com/yudejp">GitHub Organization</a></span>
                                        <small className="text-muted d-block">大したソースコードを公開</small>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="d-block">🧅 <a href="http://yudejpwxp2cziclocqjfd55ucw2dh6ncswopluh7exwusjlfkvkwhwqd.onion/">Tor</a></span>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="d-block"><FontAwesomeIcon icon={faBraille} width={20} /> <a href="http://yude.i2p/?i2paddresshelper=idabfrazqbh7upvo2f5hx3ajpqglrwny66qbvcoatfqoq64ifiaq.b32.i2p">I2P</a></span>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="d-block text-center">
                                            <FontAwesomeIcon icon={faHeart} width={100} color="pink" /> <a href="https://pjsekai.sega.jp/character/unite04/nene/index.html">草薙寧々ちゃん</a> <FontAwesomeIcon icon={faHeart} width={100} color="pink" />
                                        </span>
                                    </li>
                                </ul>
                            )
                        }

                        {
                            currentTab === "query-result" && (
                                <>
                                    <span className="text-center d-block">ブログからの検索結果</span>
                                    {query === "" && (
                                        <p className="text-center mt-4 mb-4">なにか入力してください...</p>
                                    )}
                                    {queryLoading && (
                                        <p className="text-center mt-4 mb-4">結果を読み込んでいます...</p>
                                    )}
                                    {query != "" && (
                                        <>
                                            <ul>
                                                {
                                                    queryRes && queryRes.contents.map((content: Blog) => (
                                                        <>
                                                            <li>
                                                                <Link href={"/blog/" + content.id}>{content.title}</Link>
                                                            </li>
                                                        </>
                                                    ))
                                                }
                                            </ul>
                                            {
                                                queryRes && queryRes.contents && Object.keys(queryRes.contents).length === 0 && (
                                                    <>
                                                        <span className="text-center d-block mb-2">何も見つかりませんでした。</span>
                                                    </>
                                                )
                                            }
                                        </>
                                    )}
                                </>
                            )
                        }
                    </div>
                )
            }
        </>
    )
}