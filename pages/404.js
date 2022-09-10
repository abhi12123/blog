import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
const Layout = dynamic(() => import("../components/layout"));

export default function Home() {
  const title =
    "Abhinav VP | Blog | Web development | ReactJs, Nextjs, HTML5, CSS3";
  const description =
    "Blog by Abhinav VP, a web developer based in India, created using NextJs. The blog will mostly discuss about Web development and other related topics. This page is a custom 404 page";
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
