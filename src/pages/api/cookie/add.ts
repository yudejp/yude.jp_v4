import type { NextApiRequest, NextApiResponse } from 'next'

import CloudflareKV from "cloudflare-kv"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const kv = new CloudflareKV({
        accountId: process.env.CLOUDFLARE_ACCOUNT_ID,
        apiToken: process.env.CLOUDFLARE_TOKEN,
        namespaceId: process.env.CLOUDFLARE_NAMESPACE_ID,
    });

    try {
        const value = await kv.get("cookie");
        await kv.put("cookie", parseInt(value) + 1)
    } catch {
        await kv.put("cookie", 1)
    }


    res.status(200).json({ status: "ok" })
}