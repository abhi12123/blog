import dynamic from "next/dynamic";
import Head from "next/head";
import Layout from "../components/layout";
import MetaTags from "../components/metaTags";
const BlogListEntry = dynamic(() => import("../components/blogListEntry"));
import { getSortedPostsData } from "../lib/posts";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITILE,
  SITE_NAME,
} from "../utils/constants";
import Link from "next/link";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const title = DEFAULT_TITILE;
  const description =
    DEFAULT_DESCRIPTION +
    " The blog will mostly discuss about Web development and other related topics.";
  return (
    <Layout>
      <Head>
        <MetaTags
          title={title}
          description={description}
          contentLink={SITE_NAME}
        />
      </Head>

      <section className="landing-page-hero">
        <h1 className="title1">Welcome to my blog</h1>
        <h2 className="title2">
          I'm Abhinav, a web developer based in Banglore, India. <br />
          will be dumping blogs and wierd stuff here. <br />
          You can view all blogs by topic&nbsp;
          <Link href="/topics">
            <a>here</a>
          </Link>
        </h2>
      </section>
      <section>
        <ul className="blog-list">
          {allPostsData?.map((postData) => (
            <BlogListEntry postData={postData} key={postData.id} />
          ))}
        </ul>
      </section>
    </Layout>
  );
}
