import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import { getAllTopics } from "../../lib/topics";
const Layout = dynamic(() => import("../../components/layout"));

export async function getStaticProps() {
  const allTopics = getAllTopics();
  return {
    props: {
      allTopics,
    },
  };
}

export default function Home({ allTopics }) {
  const title = `Abhinav VP | Blog | ${allTopics.length} Topics | ReactJs, Nextjs, HTML5, CSS3`;
  const description = `Web Developer Blog by Abhinav VP, a web developer based in India. Webpage lists available topics in the blog. There are a total of ${allTopics.length} topics in the blog.`;
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

      <section>
        <h1 className="title1">Topics</h1>
        <h2>{`Read from ${allTopics.length} topics`}</h2>
      </section>
      <section>
        <ul className="blog-list">
          {allTopics.map((topic, index) => {
            return (
              <li key={index} className="blog-list-entry">
                <Link href={`/topics/${topic.slug}`}>
                  <a>
                    {topic.name}({topic.postsCount})
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
}
