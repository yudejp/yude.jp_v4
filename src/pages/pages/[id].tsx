import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";

import { HatenaShareCount } from "next-share";

import { HatenaShareButton, HatenaIcon } from "next-share";

import { FacebookShareButton, FacebookIcon } from "next-share";

import { TelegramShareButton, TelegramIcon } from "next-share";

import { TwitterShareButton, TwitterIcon } from "next-share";

import { client } from "@/lib/microcms";
import type { Blog } from "@/types/blog";

import Seo from "@/pages/components/Seo";
import Ogp from "@/pages/components/Ogp";
import Title from "@/pages/components/Title";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

import cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/night-owl.css";

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const data = await client.get({ endpoint: "page" });

  const paths = data.contents.map((content: Blog) => `/pages/${content.id}`);
  return { paths, fallback: false };
};

type Props = {
  blog: Blog;
  highlightedBody: string;
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const id = context.params?.id;
  const data = await client.get({ endpoint: "page", contentId: id });

  const $ = cheerio.load(data.content);
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });

  return {
    props: {
      blog: data,
      highlightedBody: $.html(),
    },
  };
};

const BlogId: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blog,
  highlightedBody,
}: Props) => {
  return (
    <main>
      <Ogp title={blog.title} />
      <Title title={blog.title} />
      <Seo title={blog.title} />
      <div className="text-center">
        <span className="fs-2">{blog.title}</span>

        <div>
          <TwitterShareButton
            url={`https://www.yude.jp/pages/${blog.id}`}
            title={`${blog.title} | yude のページ`}
          >
            <TwitterIcon size={32} />
          </TwitterShareButton>
          <HatenaShareButton
            url={`https://www.yude.jp/pages/${blog.id}`}
            title={`${blog.title} | yude のページ`}
          >
            <HatenaIcon size={32} />
          </HatenaShareButton>
          <FacebookShareButton
            url={`https://www.yude.jp/pages/${blog.id}`}
            title={`${blog.title} | yude のページ`}
          >
            <FacebookIcon size={32} />
          </FacebookShareButton>
          <TelegramShareButton
            url={`https://www.yude.jp/pages/${blog.id}`}
            title={`${blog.title} | yude のページ`}
          >
            <TelegramIcon size={32} />
          </TelegramShareButton>
        </div>

        <div>
          <div className="d-inline" suppressHydrationWarning>
            {blog.tags.length !== 0 && (
              <FontAwesomeIcon icon={faTags} width={20} />
            )}
            {blog.tags.length !== 0 &&
              blog.tags.map((tag) => (
                <span key={tag.id} className="badge text-bg-success">
                  {tag.name}
                </span>
              ))}
          </div>
        </div>
      </div>
      <div
        className="mt-3"
        dangerouslySetInnerHTML={{ __html: highlightedBody }}
        style={{ minHeight: "400px" }}
      ></div>
    </main>
  );
};

export default BlogId;
