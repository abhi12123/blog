import dynamic from "next/dynamic";
import Head from "next/head";
const Layout = dynamic(() => import("../components/layout"));
const BlogListEntry = dynamic(() => import("../components/blogListEntry"));
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const title =
    "Abhinav VP | Blog | Web development | ReactJs, Nextjs, HTML5, CSS3";
  const description =
    "Blog by Abhinav VP, a web developer based in India, created using NextJs. The blog will mostly discuss about Web development and other related topics.";
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        {/* <html lang="en" /> */}
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
            <BlogListEntry postData={postData} key={postData.id} />
          ))}
        </ul>
      </section>
    </Layout>
  );
}
