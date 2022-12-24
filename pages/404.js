import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import MetaTags from "../components/metaTags";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITILE,
  SITE_NAME,
} from "../../utils/constants";

export default function Home() {
  return (
    <Layout>
      <Head>
        <MetaTags
          title={DEFAULT_TITILE}
          description={
            DEFAULT_DESCRIPTION +
            "The blog will mostly discuss about Web development and other related topics. It seems like the page you are looking for do not exist"
          }
          contentLink={SITE_NAME}
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
