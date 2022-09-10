import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import MetaTags from "../components/metaTags";
const Layout = dynamic(() => import("../components/layout"));

export default function Home() {
  const title =
    "Abhinav VP | Blog | Web development | ReactJs, Nextjs, HTML5, CSS3";
  const description =
    "Blog by Abhinav VP, a web developer based in India, created using NextJs. The blog will mostly discuss about Web development and other related topics. This page is a custom 404 page";
  return (
    <Layout>
      <Head>
        <MetaTags
          title={title}
          description={description}
          contentLink={"https://www.abhinavvp.com/"}
        />
      </Head>
      <section className="error404">
        <h1>404</h1>
        <h2>
          It seems like the page you are looking for do not exist &nbsp;:(
        </h2>
        <Link href="/">
          <a>
            <button>Go to home</button>
          </a>
        </Link>
      </section>
    </Layout>
  );
}
