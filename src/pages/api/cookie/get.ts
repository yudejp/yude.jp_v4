import type { NextApiRequest, NextApiResponse } from 'next'

import CloudflareKV from "cloudflare-kv"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const kv = new CloudflareKV({
        accountId: process.env.CLOUDFLARE_ACCOUNT_ID,
        apiToken: process.env.CLOUDFLARE_TOKEN,
        namespaceId: process.env.CLOUDFLARE_NAMESPACE_ID,
    });

    let cookie = 0;

    try {
        const res = await kv.get("cookie");
        cookie = parseInt(res)
    } catch {
        ;
    }


    res.status(200).json({ cookie: cookie })
}