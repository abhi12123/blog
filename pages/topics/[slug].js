import Head from "next/head";
import Link from "next/link";
import Date from "../../components/date";
import Layout from "../../components/layout";
import { getAllTopicSlugs, getPostsByTopic } from "../../lib/topics";

export async function getStaticProps({ params }) {
  const postsByTopic = await getPostsByTopic(params.slug);
  return {
    props: {
      postsByTopic,
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

export default function Post({ postsByTopic }) {
  const title =
    "Abhinav VP | Blog | Web development | ReactJs, Nextjs, HTML5, CSS3";
  const description =
    "Web Developer Blog by Abhinav VP, a web developer based in India. The Blog is created using NextJs. The blog will mostly discuss about Web development and occasionally other topics which might help developer career. The topics include Next.JS, ReactJs, HTML5, CSS3 etc";
  return (
    <Layout home>
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
        <h1>{`Abhinav's Blog`}</h1>
        <h2>
          {`Welcome to my Blog ! I'll be mostly talking about web development.`}
        </h2>
        <hr />
      </section>
      <section>
        <ul>
          {postsByTopic?.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
