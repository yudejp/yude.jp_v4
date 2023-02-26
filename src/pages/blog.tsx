import { createClient } from "microcms-js-sdk";
import type { Blog } from "@/types/blog";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faTags } from "@fortawesome/free-solid-svg-icons";

import Title from "./components/Title"
import ThumbImg from "./components/Title"

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

function BlogPage({ blogs }: { blogs: Blog[] }) {
    return (
        <div>
            <Title title="記事一覧 - ブログ" />
            <p className="fs-3">記事一覧</p>
            <div className="container">
                <div className="row row-cols-2">
                    {
                        blogs.map((blog) => (
                            <div className="card col m-1" style={{ "maxWidth": "30rem" }} key={blog.id}>
                                <img src={"https://images.microcms-assets.io/assets/f1f77e2dbfee45faa90eb70c5b4445f3/eaeec4b7b07641d183ca90c4b070e5fe/OGP%E7%94%BB%E5%83%8F(W1200xH630).png?txt=" + blog.title + "&txt-size=70&txt-color=ffffff&txt-align=middle,center&txt-font=Helvetica%20Neue"} alt={blog.title} />
                                <div className="card-body">
                                    <h5 className="card-title"><Link href={"/blog/" + blog.id}>{blog.title}</Link></h5>
                                    <div>
                                        <span className="d-inline"><FontAwesomeIcon icon={faCalendar} width={20} />{new Date(blog.updated).toLocaleDateString("ja-JP")}</span>&nbsp;
                                        <div className="d-inline"><FontAwesomeIcon icon={faTags} width={20} />
                                            {
                                                blog.tags.map((tag) => (
                                                    <span key={tag.id} className="badge text-bg-success">{tag.name}</span>
                                                ))
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default BlogPage;