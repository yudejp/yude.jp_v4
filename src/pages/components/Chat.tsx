import { useEffect, useState } from "react"
import type { Message } from "@/types/message"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function ChatList() {
    const [messages, setMessages] = useState<Message[]>();
    const [text, setText] = useState('');
    const [isLoading, setLoading] = useState(false);

    const handleSubmit = () => {
        console.log("aaaa")
        fetch('/api/chat/add?message=' + text)

        setText('')
        loadMessages();
    }

    const loadMessages = () => {
        setLoading(true)
        fetch('/api/chat/list')
            .then((res) => res.json())
            .then((data) => {
                setMessages(data)
            })
        setLoading(false)
    }

    useEffect(() => {
        loadMessages();
    }, [])

    return (
        <div className="card mb-3">
            <div className="card-body">
                <div style={{ height: "300px", overflowY: "scroll" }}>
                    <button type="button" className="btn btn-outline-info" onClick={loadMessages} style={{ position: "absolute", top: 10, right: 40 }}>
                        <FontAwesomeIcon icon={faArrowsRotate} width={20} /> 更新
                    </button>
                    {isLoading && (
                        <p>チャットを読み込んでいます...</p>
                    )}
                    {!isLoading && !messages && (
                        <p>まだ、チャットには誰も書き込んでいません。</p>
                    )}
                    {!isLoading && messages &&
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
                    <button
                        className="btn btn-outline-secondary"
                        type="submit"
                        onSubmit={handleSubmit}
                        onClick={handleSubmit}
                        disabled={text === ''}
                    ><FontAwesomeIcon icon={faPaperPlane} width={20} /> 送信</button>
                </div>
            </div>
        </div>
    )
}