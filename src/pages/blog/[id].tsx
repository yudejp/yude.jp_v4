import { useRouter } from 'next/router'

import { createClient } from "microcms-js-sdk";
import type { Blog } from "@/types/blog";

import Seo from "../components/Seo"
import Ogp from "../components/Ogp"

export const getStaticPaths = async () => {
    const microcms_key = process.env.MICROCMS_KEY != undefined ? process.env.MICROCMS_KEY : '';

    const client = createClient({
        serviceDomain: 'yude',
        apiKey: microcms_key,
    });

    const data = await client.get({ endpoint: "blog" });

    const paths = data.contents.map((content) => `/blog/${content.id}`);
    return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
    const microcms_key = process.env.MICROCMS_KEY != undefined ? process.env.MICROCMS_KEY : '';

    const client = createClient({
        serviceDomain: 'yude',
        apiKey: microcms_key,
    });

    const id = context.params.id;
    const data = await client.get({ endpoint: "blog", contentId: id });

    return {
        props: {
            blog: data,
        },
    };
};

function BlogPost({ blog }: { blog: Blog }) {
    return (
        <div>
            <Ogp title={blog.title} />
            <Seo title={blog.title + " - ブログ"} />
            <p className="fs-3">{blog.title}</p>
            <div className="hr" />
            <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
        </div>
    )
}

export default BlogPost