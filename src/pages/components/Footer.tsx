import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return (
        <>
            <span className="text-center d-block">&copy; 2023 yude (
                <Link href="https://github.com/yudejp/yude.jp_v4">ソースコード</Link>,&nbsp;
                <Link href="https://github.com/yudejp/yude.jp_v4/blob/main/README.md">ライセンス</Link>
                )</span>
            <span className="text-center d-block">Revision: <code>{process.env.VERCEL_GIT_COMMIT_SHA || "dev"}</code></span>
            <div className="text-center">
                <a href="https://sites.google.com/site/happybusy/">
                    <Image src="/assets/images/busy_banner.png" width={200} height={40} alt="happybusy" />
                </a>
                <a href="https://count.getloli.com/get/@yude?theme=asoul">
                    <img src="https://count.getloli.com/get/@yude?theme=asoul"
                        alt="表示カウンター (count.getloli.com)"
                        loading="lazy" />
                </a>
            </div>
        </>
    )
}