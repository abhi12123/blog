import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import MetaTags from "../../components/metaTags";
const BlogListEntry = dynamic(() => import("../../components/blogListEntry"));

import {
  getAllTopicSlugs,
  getPostsByTopic,
  getTopicDetails,
} from "../../lib/topics";
import { DEFAULT_DESCRIPTION, SITE_NAME } from "../../utils/constants";

export async function getStaticProps({ params }) {
  const postsByTopic = await getPostsByTopic(params.slug);
  const topicDetails = await getTopicDetails(params.slug);
  return {
    props: {
      postsByTopic,
      topicDetails,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllTopicSlugs();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postsByTopic, topicDetails }) {
  const title = `Abhinav VP | ${topicDetails.name} | ${topicDetails.postsCount} Articles | ReactJs, Nextjs, HTML5, CSS3`;
  const description = `${DEFAULT_DESCRIPTION} This page has the collection of ${topicDetails.postsCount} under the topic ${topicDetails.name}`;
  return (
    <Layout>
      <Head>
        <MetaTags
          title={title}
          description={description}
          contentLink={`${SITE_NAME}/posts/${topicDetails.slug}`}
        />
      </Head>
      <section>
        <h1 className="title1">{topicDetails.name}</h1>
        <h2>{`${topicDetails.postsCount} article(s) under the topic "${topicDetails.name}"`}</h2>
      </section>
      <section>
        <ul className="blog-list">
          {postsByTopic?.map((postData) => (
            <BlogListEntry postData={postData} key={postData.id} />
          ))}
        </ul>
      </section>
    </Layout>
  );
}
