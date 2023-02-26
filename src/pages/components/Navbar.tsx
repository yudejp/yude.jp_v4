import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser, faBlog, faComment, faHeart, faBraille, faCheck, faServer, faStar, faBomb, faLink, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons"

import { useState, useRef } from "react";
import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';

export default function Navbar({ ...props }) {
    const [isFocus, setFocus] = useState(false);
    const toggleDropdown = () => setFocus(!isFocus);

    const textInput = useRef(null);

    function handleClick() {
        console.log("aaa")
    }

    return (
        <>
            <div className="container ml-5 mr-5 mt-4 aligns-items-center">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link href="/" legacyBehavior>
                            <a className="nav-link disabled text-body" tabIndex={-1} aria-disabled="true">
                                yude.jp
                            </a>
                        </Link>
                    </li>

                    <Form>
                        <Form.Group controlId="formSearchInput">
                            <Form.Control className="search-area" ref={textInput} onFocus={toggleDropdown} type="text" placeholder="なにをお探しですか？" autoComplete="off" />
                        </Form.Group>
                    </Form>
                    <Button onClick={() => console.log("FUCK")} variant="outline-secondary"><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
                </ul>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/blog"><FontAwesomeIcon icon={faBlog} width={20} /> ブログ</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/profile"><FontAwesomeIcon icon={faUser} width={20} /> プロフィール</a>
                    </li>
                </ul>

            </div>
            {
                isFocus && (
                    <div className="card position-absolute top-30 start-50 translate-middle-x">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="other-content-tab" data-bs-toggle="tab" data-bs-target="#other-content-tab-pane" type="button" role="tab" aria-controls="other-content-tab-pane" aria-selected="true">その他のコンテンツ</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="external-links-tab" data-bs-toggle="tab" data-bs-target="#external-links-tab-pane" type="button" role="tab" aria-controls="external-links-tab-pane" aria-selected="false">外部リンク</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="search-result-tab" data-bs-toggle="tab" data-bs-target="#search-result-tab-pane" type="button" role="tab" aria-controls="search-result-tab-pane" aria-selected="false">検索結果</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" onClick={toggleDropdown}>閉じる</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="other-content-tab-pane" role="tabpanel" aria-labelledby="other-content-tab" tabIndex={0}>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <span className="d-block"><FontAwesomeIcon icon={faComment} width={20} /> <a href="/1ch">1ch</a></span>
                                        <small className="text-muted d-block">yude.jp における、ふたばちゃんねる</small>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="d-block"><FontAwesomeIcon icon={faBomb} width={20} /> <a href="/apps">アプリ</a></span>
                                        <small className="text-muted d-block">ゴミ</small>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="d-block"><FontAwesomeIcon icon={faStar} width={20} /> <a href="/services">サービス</a></span>
                                        <small className="text-muted d-block">yude.jp が保有するリソースで提供中のサービス</small>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="d-block"><FontAwesomeIcon icon={faServer} width={20} /> <a href="/servers">サーバー</a></span>
                                        <small className="text-muted d-block">ゆでハウスなどで稼働中の自宅サーバー等</small>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="d-block"><FontAwesomeIcon icon={faLink} width={20} /> <a href="/links">リンク集</a></span>
                                        <small className="text-muted d-block">相互リンクや、勝手に貼り付けたリンク</small>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="d-block"><FontAwesomeIcon icon={faNewspaper} width={20} /> <a href="/hcunews">@hcunews について</a></span>
                                        <small className="text-muted d-block">広島市立大学 Webページの更新通知ボット</small>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="d-block"><FontAwesomeIcon icon={faNewspaper} width={20} /> <a href="/tos">yude.jp サービス利用規約</a></span>
                                        <small className="text-muted d-block">yude.jp が運用するサービスの利用規約</small>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="external-links-tab-pane" role="tabpanel" aria-labelledby="external-links-tab" tabIndex={0}>
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
                            </div>
                            <div className="tab-pane fade" id="search-result-tab-pane" role="tabpanel" aria-labelledby="search-result-tab" tabIndex={0}>...</div>
                        </div>
                    </div>
                )
            }
        </>
    )
}