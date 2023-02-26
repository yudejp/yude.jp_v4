import Head from "next/head";

export default function Title({ title }: { title: string }) {
    return (
        <Head>
            <Title title={title} />
            <meta content="width=device-width,initial-scale=1.0" />
            <meta name="description" content={title + " - yude.jp"} />
            <meta property="og:title" content={title} />
            <meta property="og:site_name" content="yude.jp" />
            <meta property="og:type" content="website" />
        </Head>
    )
}