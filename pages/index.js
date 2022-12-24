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
        <h1 className="title1">
          Abhinav&nbsp;VP, <small>Web&nbsp;Developer&nbsp;👨‍💻</small>
        </h1>
        <h2 className="title2">
          <span className="wave">👋</span> Welcome to my Blog !
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
