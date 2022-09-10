import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import MetaTags from "../../components/metaTags";
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
        <MetaTags
          title={title}
          description={description}
          contentLink="https://www.abhinavvp.com/topics"
        />
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
