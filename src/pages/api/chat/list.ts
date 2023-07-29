export const runtime = 'edge';

import { db } from "@/lib/firebase";
import { collection, DocumentData, getDocs } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from 'next'

import { query, orderBy, limit } from "firebase/firestore";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const querySnapshot = await getDocs(query(collection(db, "messages"), orderBy('datetime', 'desc'), limit(30)));
    const data: { id: string; message: DocumentData; datetime: DocumentData; }[] = [];
    querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, message: doc.data().message, datetime: doc.data().datetime })
    })
    res.status(200).json(data);
}
