import Head from "next/head";

export default function Ogp({ title }: { title: string }) {
    return <Head>
        <meta property="og.image" content={"https://images.microcms-assets.io/assets/f1f77e2dbfee45faa90eb70c5b4445f3/eaeec4b7b07641d183ca90c4b070e5fe/OGP%E7%94%BB%E5%83%8F(W1200xH630).png?txt=" + title + "&txt-size=70&txt-color=ffffff&txt-align=middle,center&txt-font=Helvetica%20Neue"} />
    </Head>
}