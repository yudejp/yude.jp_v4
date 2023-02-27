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
        <div className="text-center m-4">
            <span className="fs-4 d-block" style={{ fontFamily: "serif" }}>{data && data.text}</span>
            <span className="d-block">{data && data.artist} / {data && data.title}</span>
            <button type="button" className="btn btn-outline-info" onClick={handleClick}><FontAwesomeIcon icon={faRefresh} width={50} /></button>
        </div>
    )
}