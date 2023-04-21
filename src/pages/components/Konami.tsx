
import konamiState from './KonamiProvider'
import { useRecoilState } from 'recoil'

export default function Konami() {
    const [_, setKonami] = useRecoilState(konamiState);

    return (
        <div className="window position-absolute" style={{ zIndex: "2000", top: "0", left: "0", "right": "0", "bottom": "0", margin: "auto", maxWidth: "580px", maxHeight: "370px" }}>
            <div className="title-bar" style={{ height: "30px" }}>
                <div className="title-bar-text">インターネットやめろ</div>
                <div className="title-bar-controls">
                    <button aria-label="Close" onClick={() => {
                        setKonami(false); console.log("Closing")
                    }}></button>
                </div>
            </div>
            <div className="window-body">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/51GIxXFKbzk?mute=1&autoplay=1" title="YouTube video player"></iframe>
            </div>
        </div>
    )
}