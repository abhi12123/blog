import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import MetaTags from "../../components/metaTags";
import Share from "../../components/share";
const Date = dynamic(() => import("../../components/date"));
import { getAllPostIds, getPostData } from "../../lib/posts";
import { generateSlug } from "../../utils/generators";
import { SITE_NAME } from "../../utils/constants";

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
    <Layout blog>
      <Head>
        <MetaTags
          title={postData.title}
          description={postData.description}
          contentLink={`${SITE_NAME}/posts/${postData.id}`}
        />
      </Head>
      <article className="article">
        <h1 className="title1">{postData.title}</h1>
        <div className="article-meta">
          <div>
            <Date dateString={postData.date} /> - {postData.time} min read
          </div>
          <div className="topic-chips">
            {postData.topics.map((topic, index) => {
              return (
                <Link key={index} href={`/topics/${generateSlug(topic)}`}>
                  <a className="topic-chip">{`#${generateSlug(topic)}`}</a>
                </Link>
              );
            })}
          </div>
        </div>
        <Share
          url={`https://www.abhinavvp.com/posts/${postData.id}`}
          title={postData.title}
        />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <nav className="nav-items">
        {postData.prevPost && (
          <Link href={`/posts/${postData.prevPost.id}`}>
            <a>
              <div className="nav-item prev-post">
                <p>
                  <small>previous article</small>
                  <br />
                  {postData.prevPost.title}
                </p>
              </div>
            </a>
          </Link>
        )}
        {postData.nextPost && (
          <Link href={`/posts/${postData.nextPost.id}`}>
            <a>
              <div className="nav-item next-post">
                <p>
                  <small>next article</small>
                  <br />
                  {postData.nextPost.title}
                </p>
              </div>
            </a>
          </Link>
        )}
      </nav>
    </Layout>
  );
}
