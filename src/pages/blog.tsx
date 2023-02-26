import { createClient } from "microcms-js-sdk";
import type { Blog } from "@/types/blog";
import { BLOCKED_PAGES } from "next/dist/shared/lib/constants";
import { InferGetStaticPropsType, NextPage } from "next/types";

export const getStaticProps = async () => {
    const microcms_key = process.env.MICROCMS_KEY != undefined ? process.env.MICROCMS_KEY : '';

    const client = createClient({
        serviceDomain: 'yude',
        apiKey: microcms_key,
    });

    const blog = await client.get({ endpoint: "blog" });

    return {
        props: {
            blogs: blog.contents,
        },
    };
};

type Props = {
    blogs: Blog[];
};

function BlogPage({ blogs }: { blogs: Blog[] }) {
    return (
        <div>
            <p className="fs-3">記事一覧</p>
            {
                blogs.map((blog) => (
                    <li key={blog.id}>
                        {blog.title}
                    </li>
                ))
            }
        </div>
    )
}

export default BlogPage;