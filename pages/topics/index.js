import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import MetaTags from "../../components/metaTags";
import { getAllTopics } from "../../lib/topics";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITILE,
  SITE_NAME,
} from "../../utils/constants";

export async function getStaticProps() {
  const allTopics = getAllTopics();
  return {
    props: {
      allTopics,
    },
  };
}

export default function Home({ allTopics }) {
  const title = `${DEFAULT_TITILE} | ${allTopics.length} Topics | ReactJs, Nextjs, HTML5, CSS3`;
  const description = `${DEFAULT_DESCRIPTION}. Webpage lists available topics in the blog. There are a total of ${allTopics.length} topics in the blog.`;
  return (
    <Layout>
      <Head>
        <MetaTags
          title={title}
          description={description}
          contentLink={SITE_NAME + "/topics"}
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
              <Link href={`/topics/${topic.slug}`} key>
                <a className="blog-list-entry" key={index}>
                  <li>
                    {topic.name}({topic.postsCount})
                  </li>
                </a>
              </Link>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
}
