import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
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
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://about.abhinavvp.com/images/profile-pic.jpg"
        />
        <meta property="og:url" content="https://www.abhinavvp.com/" />
        <meta property="og:site_name" content={title} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://about.abhinavvp.com/images/profile-pic.jpg"
        />
        <meta name="twitter:site" content="@abhi_vp_" />
        <meta name="twitter:creator" content="@abhi_vp_" />
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
