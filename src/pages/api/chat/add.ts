import { db } from "../../../lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const message = req.query.message;
    const ip_addr = req.headers['x-real-ip'] || req.connection.remoteAddress;
    const port = req.headers['x-real-port'] || req.connection.remotePort;

    if (message) {
        await addDoc(collection(db, "messages"), {
            message: message,
            datetime: new Date(),
            ip_addr: ip_addr + ":" + port
        })
        res.status(200).json({ status: "ok" })
    } else {
        res.status(200).json({ error: "Message body is empty" })
    }
}