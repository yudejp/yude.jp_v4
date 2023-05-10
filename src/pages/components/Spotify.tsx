import { useEffect, useState } from "react"
import type { SpotifyData } from "@/types/spotify";

import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faMusic, faUser, faRecordVinyl } from "@fortawesome/free-solid-svg-icons";

import classes from "./Spotify.module.css";

export default function Spotify() {
    const [data, setData] = useState<SpotifyData>();
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch('https://vercel-spotify-api.vercel.app/api/Spotify')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (!isLoading && data && data.isPlaying) {
        return (
            <div className="card mt-3">
                <div className="card-body container">
                    <p className="position-absolute fs-5" style={{ top: "3px", right: "8px" }}>
                        <FontAwesomeIcon icon={faSpotify} />
                    </p>
                    <div className="row">
                        <div className="col-3">
                            <Image
                                src={data.album_art || 'Loading'}
                                alt={data.title || 'Loading'}
                                width={120}
                                height={120}
                                className="rounded"
                            />
                        </div>
                        <div className="col-2"></div>
                        <div className="col-7">
                            <span className="d-block text-muted"><FontAwesomeIcon icon={faMusic} width={20} /> 再生中</span>
                            <a href={data.link}><h5 className="card-title">{data.title}</h5></a>
                            <p className="card-text">
                                <span className="d-block"><FontAwesomeIcon icon={faUser} width={20} /> {data.artist}</span>
                                    <div className="position-absolute">
                                    <FontAwesomeIcon icon={faRecordVinyl} width={20} />
                                    </div>
                                    <div className="position-absolute" style={{ marginLeft: "28px", minWidth: "160px", maxWidth: "170px", width: "90%"}}>
                                        <div className={`${classes.scroll}`}>
                                        <span>{data.album}</span>
                                        </div>
                                    </div>
                                    <div style={{height: "20px"}}></div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return <></>
    }
}
