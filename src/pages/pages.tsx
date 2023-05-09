import { createClient } from "microcms-js-sdk";
import type { Blog } from "@/types/blog";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faTags } from "@fortawesome/free-solid-svg-icons";

import Title from "./components/Title"

export const getStaticProps = async () => {
    const microcms_key = process.env.MICROCMS_KEY != undefined ? process.env.MICROCMS_KEY : '';

    const client = createClient({
        serviceDomain: 'yude',
        apiKey: microcms_key,
    });

    const blog = await client.get({ endpoint: "page" });

    return {
        props: {
            blogs: blog.contents,
        },
    };
};

function BlogPage({ blogs }: { blogs: Blog[] }) {
    return (
        <div>
            <Title title="ページ一覧" />
            <p className="fs-2">ページ一覧</p>
            <div className="container">
                <div className="row row-cols-2">
                    <ul>
                        {
                            blogs.map((blog) => (
                                <li key={blog.id}><Link href={"pages/" + blog.id} suppressHydrationWarning>{blog.title}</Link></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default BlogPage;
