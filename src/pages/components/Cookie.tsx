import { useEffect, useState } from "react"

export default function ChatList() {
    const [cookie, setCookie] = useState(0);
    const [isLoading, setLoading] = useState(false);

    const handleSubmit = () => {
        fetch('/api/cookie/add')
        setCookie(cookie + 1)
    }

    useEffect(() => {
        setLoading(true)
        fetch('/api/cookie/get')
            .then((res) => res.json())
            .then((data) => {
                setCookie(data.cookie)
                setLoading(false)
            })
    }, [])

    return (
        <div className="card mb-2">
            <div className="card-body text-center">
                <p style={{ fontSize: 150, userSelect: "none" }} onClick={handleSubmit}>🍪</p>
                <p className="fs-3">{!isLoading && cookie}</p>
            </div>
        </div>
    )
}