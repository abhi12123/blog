import dynamic from "next/dynamic";
import Head from "next/head";
import MetaTags from "../components/metaTags";
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
        <MetaTags
          title={title}
          description={description}
          contentLink="https://www.abhinavvp.com/"
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
