import { db } from "../../../lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { LimitChecker } from "@/lib/limitChecker";
import type { NextApiRequest, NextApiResponse } from 'next'

const limitChecker = LimitChecker();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const message = req.query.message;
    const ip_addr = req.headers['x-real-ip'] || req.connection.remoteAddress;
    const port = req.headers['x-real-port'] || req.connection.remotePort;

    try {
        await limitChecker.check(res, 3, req.headers['x-real-ip']?.toString() || "");
    } catch (error) {
        console.error(error);

        res.status(429).json({
            text: `Rate Limited`,
        });
        return;
    }
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
