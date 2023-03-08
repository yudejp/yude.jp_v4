import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";

import type { Quote } from "@/types/quote";

export default function Quotes() {
    const [data, setData] = useState<Quote>();
    const fetchData = async () => {
        const req = await fetch('./assets/quotes.json')
        const jsonData = await req.json();

        const len = jsonData.length;
        return setData(jsonData[Math.floor(Math.random() * len)])
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        fetchData();
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="position-relative text-center mt-2 mb-2 text-warning shadow-lg p-2 rounded" style={{ backgroundImage: `url("./assets/images/marisa.png")`, backgroundPositionY: "300px" }}>
            <span className="position-absolute text-secondary" style={{ bottom: "3px", right: "3px" }}>絵: 猫蝉 さん (<a href="https://twitter.com/NekoSemi96" style={{ color: "currentcolor" }}>@NekoSemi96</a>)</span>
            <span className="fs-4 d-block" style={{ fontFamily: "serif", textShadow: `1px 1px 3px #ffd960` }}>{data && data.text}</span>
            <span className="d-block">{data && data.artist} / {data && data.title}</span>
            <button type="button" className="btn btn-outline-info" onClick={handleClick}><FontAwesomeIcon icon={faRefresh} width={30} /></button>
        </div>
    )
}