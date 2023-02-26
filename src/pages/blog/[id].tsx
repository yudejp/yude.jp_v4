import { useRouter } from 'next/router'

import { createClient } from "microcms-js-sdk";
import type { Blog } from "@/types/blog";

import Seo from "../components/Seo"
import Ogp from "../components/Ogp"
import Title from "../components/Title"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faTags } from "@fortawesome/free-solid-svg-icons";

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
            <Title title={blog.title + " - ブログ"} />
            <Seo title={blog.title + " - ブログ"} />
            <div className="text-center">
                <span className="fs-2">{blog.title}</span>
                <div>
                    <span className="d-inline" suppressHydrationWarning><FontAwesomeIcon icon={faCalendar} width={20} />{new Date(blog.updated).toLocaleDateString("ja-JP")}</span>&nbsp;
                    <div className="d-inline" suppressHydrationWarning><FontAwesomeIcon icon={faTags} width={20} />
                        {
                            blog.tags.map((tag) => (
                                <span key={tag.id} className="badge text-bg-success">{tag.name}</span>
                            ))
                        }

                    </div>
                </div>
            </div>
            <div className="mt-3" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
        </div>
    )
}

export default BlogPost