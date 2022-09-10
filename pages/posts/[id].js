import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import MetaTags from "../../components/metaTags";
const Date = dynamic(() => import("../../components/date"));
const Layout = dynamic(() => import("../../components/layout"));
import { getAllPostIds, getPostData } from "../../lib/posts";
import { generateSlug } from "../../utils/generators";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <MetaTags
          title={postData.title}
          description={postData.description}
          contentLink={`https://www.abhinavvp.com/posts/${postData.id}`}
        />
      </Head>
      <article className="article">
        <h1 className="title1">{postData.title}</h1>
        <ul className="article-meta">
          <li>
            📅 <Date dateString={postData.date} />
          </li>
          <li>🕒 {postData.time} minutes </li>
          <li>
            🔗{" "}
            {postData.topics
              .map((topic, index) => {
                return (
                  <Link key={index} href={`/topics/${generateSlug(topic)}`}>
                    <a>{`#${generateSlug(topic)}`}</a>
                  </Link>
                );
              })
              .reduce((accu, elem) => {
                return accu === null ? [elem] : [...accu, ", ", elem];
              }, null)}
          </li>
        </ul>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <nav className="nav-items">
        {postData.prevPost && (
          <Link href={`/posts/${postData.prevPost.id}`}>
            <a>
              <div className="nav-item prev-post">
                <p>⬅️ {postData.prevPost.title}</p>
              </div>
            </a>
          </Link>
        )}
        {postData.nextPost && (
          <Link href={`/posts/${postData.nextPost.id}`}>
            <a>
              <div className="nav-item next-post">
                <p>{postData.nextPost.title} ➡️</p>
              </div>
            </a>
          </Link>
        )}
      </nav>
    </Layout>
  );
}
