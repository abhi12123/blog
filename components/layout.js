import Head from "next/head";
import Link from "next/link";

export const siteTitle = `Abhinav's Blog`;

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <nav>
        <Link href="/">
          <a>
            <h3>Abhinav VP</h3>
          </a>
        </Link>
        <Link href="https://about.abhinavvp.com">
          <a>About</a>
        </Link>
      </nav>
      <main>{children}</main>
      {!home && (
        <footer>
          <hr />
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </footer>
      )}
    </div>
  );
}
