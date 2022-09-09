import Head from "next/head";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import { getAllTopics } from "../lib/topics";
import BlogListEntry from "../components/blogListEntry";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allTopics = getAllTopics();
  return {
    props: {
      allPostsData,
      allTopics,
    },
  };
}

export default function Home({ allPostsData, allTopics }) {
  const title =
    "Abhinav VP | Blog | Web development | ReactJs, Nextjs, HTML5, CSS3";
  const description =
    "Web Developer Blog by Abhinav VP, a web developer based in India. The Blog is created using NextJs. The blog will mostly discuss about Web development and occasionally other topics which might help developer career. The topics include Next.JS, ReactJs, HTML5, CSS3 etc";
  return (
    <Layout trendingTopics={allTopics.slice(0, 4)}>
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
            <BlogListEntry postData={postData} />
          ))}
        </ul>
      </section>
    </Layout>
  );
}
