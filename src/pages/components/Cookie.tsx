import { useEffect, useState } from "react"
import type { CounterData } from "@/types/counter";

export default function ChatList() {
    const [cookie, setCookie] = useState<CounterData>({ name: "counter", num: 0 });
    const [isLoading, setLoading] = useState(false);

    const handleSubmit = () => {
        setLoading(true)
        fetch('https://moe-counter.yude.jp/record/@:yude-button-counter')
            .then((res) => res.json())
            .then((data) => {
                setCookie(data)
                setLoading(false)
            })
    }

    useEffect(() => {
        handleSubmit()
    }, [])

    return (
        <div className="card mb-2">
            <div className="card-body text-center">
                <p style={{ fontSize: 150, userSelect: "none" }} onClick={handleSubmit}>🍪</p>
                <p className="fs-3">{!isLoading && cookie && cookie.num}{isLoading && cookie.num}</p>
            </div>
        </div>
    )
}