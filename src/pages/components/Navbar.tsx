import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faUser, faBlog, faHeart, faBraille, faCheck, faServer, faStar, faBomb, faLink, faNewspaper, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons"

import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';

import { useTheme } from '../../lib/theme'
import { QueryResult, Blog } from "@/types/blog";

import Logo from "./Logo"

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
                            <Logo />
                        </Link>
                    </li>

                    <Form className="position-relative" style={{ top: "16px" }}>
                        <Form.Group controlId="formSearchInput" style={{}}>
                            <Form.Control className="search-area" onFocus={showDropdown} type="text" placeholder="??????????????????????????????" autoComplete="off" onChange={handleQueryChange} />
                        </Form.Group>
                    </Form>
                </ul>
                <ul className="nav justify-content-center mt-3">
                    <li className="nav-item">
                        <Link href="/blog" legacyBehavior>
                            <a className="nav-link active" aria-current="page"><FontAwesomeIcon icon={faBlog} width={20} /> ?????????</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/profile" legacyBehavior>
                            <a className="nav-link"><FontAwesomeIcon icon={faUser} width={20} /> ??????????????????</a>
                        </Link>
                    </li>
                    <button type="button" className="btn btn-secondary" onClick={toggleTheme}>{theme === "light" ? <FontAwesomeIcon icon={faMoon} width={25} /> : <FontAwesomeIcon icon={faSun} width={25} />}</button>
                </ul>
            </div>

            {
                isFocus && (
                    <div className="card position-absolute top-30 start-50 translate-middle-x w-100" style={{ zIndex: 2000, maxWidth: "50rem" }}>
                        <Nav variant="pills" activeKey={currentTab} onSelect={handleTabChange}>
                            <Nav.Item>
                                <Nav.Link eventKey="other-content" href="#">
                                    ???????????????????????????
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="external-links" href="#">
                                    ???????????????
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="query-result" href="#">
                                    ????????????
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={hideDropdown}>
                                    ?????????
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        {
                            currentTab === "other-content" && (
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <span className="d-block"><FontAwesomeIcon icon={faBook} width={20} /> <Link href="/pages">???????????????</Link></span>
                                        <small className="text-muted d-block">???????????????????????????????????????????????????????????????</small>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="d-block"><FontAwesomeIcon icon={faBomb} width={20} /> <Link href="/apps">?????????</Link></span>
                                        <small className="text-muted d-block">??????</small>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="d-block"><FontAwesomeIcon icon={faStar} width={20} /> <Link href="/services">????????????</Link></span>
                                        <small className="text-muted d-block">yude.jp ??????????????????????????????????????????????????????</small>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="d-block"><FontAwesomeIcon icon={faServer} width={20} /> <Link href="/servers">????????????</Link></span>
                                        <small className="text-muted d-block">?????????????????????????????????????????????????????????</small>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="d-block"><FontAwesomeIcon icon={faLink} width={20} /> <Link href="/links">????????????</Link></span>
                                        <small className="text-muted d-block">??????????????????????????????????????????????????????</small>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="d-block"><FontAwesomeIcon icon={faNewspaper} width={20} /> <Link href="/hcunews">@hcunews ????????????</Link></span>
                                        <small className="text-muted d-block">?????????????????? Web?????????????????????????????????</small>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="d-block"><FontAwesomeIcon icon={faNewspaper} width={20} /> <Link href="/tos">yude.jp ????????????????????????</Link></span>
                                        <small className="text-muted d-block">yude.jp ??????????????????????????????????????????</small>
                                    </li>
                                </ul>
                            )
                        }

                        {
                            currentTab === "external-links" && (
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <span className="d-block"><FontAwesomeIcon icon={faDiscord} width={20} /> <a href="https://discord.gg/X6srY7X">Discord ????????????</a></span>
                                        <small className="text-muted d-block">?????????????????????????????????</small>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="d-block"><FontAwesomeIcon icon={faGithub} width={20} /> <a href="https://github.com/yudejp">GitHub Organization</a></span>
                                        <small className="text-muted d-block">????????????????????????????????????</small>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="d-block"><FontAwesomeIcon icon={faCheck} width={20} /> <a href="https://status.yude.jp">???????????????????????????</a></span>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="d-block">???? <a href="http://yudejpwxp2cziclocqjfd55ucw2dh6ncswopluh7exwusjlfkvkwhwqd.onion/">Tor</a></span>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="d-block"><FontAwesomeIcon icon={faBraille} width={20} /> <a href="http://yude.i2p/?i2paddresshelper=idabfrazqbh7upvo2f5hx3ajpqglrwny66qbvcoatfqoq64ifiaq.b32.i2p">I2P</a></span>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="d-block text-center">
                                            <FontAwesomeIcon icon={faHeart} width={100} color="pink" /> <a href="https://pjsekai.sega.jp/character/unite04/nene/index.html">?????????????????????</a> <FontAwesomeIcon icon={faHeart} width={100} color="pink" />
                                        </span>
                                    </li>
                                </ul>
                            )
                        }

                        {
                            currentTab === "query-result" && (
                                <>
                                    <span className="text-center d-block">??????????????????????????????</span>
                                    {query === "" && (
                                        <p className="text-center mt-4 mb-4">?????????????????????????????????...</p>
                                    )}
                                    {queryLoading && (
                                        <p className="text-center mt-4 mb-4">?????????????????????????????????...</p>
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
                                                        <span className="text-center d-block mb-2">???????????????????????????????????????</span>
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