import { useEffect, useState } from "react"
import type { Message } from "@/types/message"

export default function ChatList() {
    const [messages, setMessages] = useState<Message[]>();
    const [text, setText] = useState('');
    const [isLoading, setLoading] = useState(false);

    const handleSubmit = () => {
        console.log("aaaa")
        fetch('/api/chat/add?message=' + text)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            })
        loadMessages();
    }

    const loadMessages = () => {
        setLoading(true)
        fetch('/api/chat/list')
            .then((res) => res.json())
            .then((data) => {
                setMessages(data)
                setLoading(false)
            })
    }

    useEffect(() => {
        loadMessages();
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!messages) return <p>No profile data</p>

    return (
        <div className="card mb-3">
            <div className="card-body">
                <div style={{ height: "300px", overflowY: "scroll" }}>
                    {
                        messages.map((message) => (
                            <span key={message.id}>
                                <span>{message.message}</span>
                                <small><span className="d-block text-muted">{new Date(message.datetime.seconds * 1000).toLocaleDateString("ja-JP")} {new Date(message.datetime.seconds * 1000).toLocaleTimeString("ja-JP")}</span></small>
                            </span>
                        )
                        )
                    }
                </div>

                <div className="hr mt-2 mb-2" />

                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="なにか入力してください..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <input
                        className="btn btn-outline-secondary"
                        type="submit"
                        onSubmit={handleSubmit}
                        onClick={handleSubmit}
                        value="送信"
                    />
                </div>
            </div>
        </div>
    )
}