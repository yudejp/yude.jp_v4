import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return (
        <div className="text-center">
            &copy; 2023 yude. (<Link href="https://github.com/yudejp/yude.jp_v4/blob/main/README.md">ライセンス</Link>)
            <div>
                <div className="d-inline m-1">
                    <a href="https://sites.google.com/site/happybusy/">
                        <Image src="/assets/images/busy_banner.png" width={200} height={40} alt="happybusy" />
                    </a>
                </div>
                <div className="d-inline m-1">
                    <a href="https://count.getloli.com/get/@yude?theme=asoul">
                        <img src="https://count.getloli.com/get/@yude?theme=asoul"
                            alt="表示カウンター (count.getloli.com)"
                            loading="lazy" />
                    </a>
                </div>
            </div>
        </div>
    )
}