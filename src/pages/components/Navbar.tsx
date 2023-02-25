import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser, faBlog, faComment, faHeart, faCheck, faServer, faStar, faBomb, faLink, faNewspaper, faListNumeric } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons"

import { useState, useRef } from "react";
import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
                        <a className="nav-link disabled text-body" href="#" tabIndex={-1} aria-disabled="true">yude.jp</a>
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
                        <a className="nav-link active" aria-current="page" href="/blog"><FontAwesomeIcon icon={faBlog} /> ブログ</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/profile"><FontAwesomeIcon icon={faUser} /> プロフィール</a>
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
                                        <span className="d-block"><FontAwesomeIcon icon={faComment} /> 1ch</span>
                                        <small className="text-muted d-block">yude.jp における、ふたばちゃんねる</small>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="d-block"><FontAwesomeIcon icon={faBomb} /> アプリ</span>
                                        <small className="text-muted d-block">ゴミ</small>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="d-block"><FontAwesomeIcon icon={faStar} /> サービス</span>
                                        <small className="text-muted d-block">yude.jp が保有するリソースで提供中のサービス</small>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="d-block"><FontAwesomeIcon icon={faServer} /> サーバー</span>
                                        <small className="text-muted d-block">ゆでハウスなどで稼働中の自宅サーバー等</small>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="d-block"><FontAwesomeIcon icon={faLink} /> リンク集</span>
                                        <small className="text-muted d-block">相互リンクや、勝手に貼り付けたリンク</small>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="d-block"><FontAwesomeIcon icon={faNewspaper} /> @hcunews について</span>
                                        <small className="text-muted d-block">広島市立大学 Webページの更新通知ボット</small>
                                    </li>

                                </ul>
                            </div>
                            <div className="tab-pane fade" id="external-links-tab-pane" role="tabpanel" aria-labelledby="external-links-tab" tabIndex={0}>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <span className="d-block"><FontAwesomeIcon icon={faDiscord} /> Discord サーバー</span>
                                        <small className="text-muted d-block">自由に会話（合法的に）</small>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="d-block"><FontAwesomeIcon icon={faGithub} /> GitHub Organization</span>
                                        <small className="text-muted d-block">大したソースコードを公開</small>
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