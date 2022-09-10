import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import MetaTags from "../../components/metaTags";
const BlogListEntry = dynamic(() => import("../../components/blogListEntry"));
const Layout = dynamic(() => import("../../components/layout"));

import {
  getAllTopicSlugs,
  getPostsByTopic,
  getTopicDetails,
} from "../../lib/topics";

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
  const description = `Web Developer Blog by Abhinav VP, a web developer based in India. This page has the collection of ${topicDetails.postsCount} under the topic ${topicDetails.name}`;
  return (
    <Layout>
      <Head>
        <MetaTags
          title={title}
          description={description}
          contentLink={`https://www.abhinavvp.com/posts/${topicDetails.slug}`}
        />
      </Head>
      <section>
        <h1 className="title1">{topicDetails.name}</h1>
        <h2>{`${topicDetails.postsCount} articles under the topic "${topicDetails.name}"`}</h2>
        <Link href="/topics">
          <a className="view-topics">
            <h3>View all topics ✨</h3>
          </a>
        </Link>
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
