import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useActiveElement } from '@react-hooks-library/core'
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

            </div>
            {
                isFocus && (
                    <div className="card position-absolute top-30 start-50 translate-middle-x">
                        <div className="card-header">
                            <ul className="nav nav-tabs card-header-tabs">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="true" href="#">主なページ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">検索結果</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={toggleDropdown}>閉じる</a>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>

                        </div>
                    </div>
                )
            }
        </>
    )
}