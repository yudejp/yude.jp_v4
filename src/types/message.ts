import { Timestamp } from "firebase/firestore"

export type Message = {
    id: string,
    message: string,
    datetime: Timestamp,
    ip_addr: string,
}