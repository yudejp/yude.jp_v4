import { client } from "@/lib/microcms";
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const keyword = req.query.keyword;

    if (keyword) {
        const response = await client.get({
            endpoint: "blog",
            queries: {
                q: decodeURI(keyword.toString()),
            }
        })
        res.status(200).json(response)
    } else {
        res.status(200).json({ name: 'John Doe' })
    }
}
