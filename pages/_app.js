import Head from "next/head";
import Script from "next/script";
// comment out for style changes
// import "../styles/globals.scss";
import { DEFAULT_TITILE, GOOGLE_ANALYTICS_ID } from "../utils/constants";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          {pageProps?.postData?.title
            ? pageProps?.postData?.title + " " + DEFAULT_TITILE
            : DEFAULT_TITILE}
        </title>
      </Head>
      <Component {...pageProps} />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
        }
        * {
          box-sizing: border-box;
        }
        .a-style-removed a,
        .navbar a,
        .nav-items a,
        .blog-list a,
        .article-meta a {
          color: #000;
          text-decoration: none;
        }
        .title1 {
          font-size: 40px;
          text-align: center;
        }
        .navbar {
          border-bottom: 1px solid #000;
        }
        .navbar .navbar-container {
          max-width: 1024px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: auto;
          padding: 20px 10px;
        }
        .navbar .logo-name h3 {
          margin: 0;
        }
        .nav-items {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          margin: 60px 0;
        }
        .nav-item {
          padding: 0 10px;
          border: 0.5px solid #0e0e0e;
        }
        .nav-item:hover {
          background-color: slategrey;
          color: #fff;
        }
        .right-nav {
          display: flex;
          gap: 10px;
        }
        .layout-body {
          max-width: 1024px;
          margin: auto;
          padding: 0 10px;
        }
        .next-post {
          text-align: right;
        }
        .landing-page-hero h2 {
          text-align: right;
        }
        .blog-list {
          padding: 0;
          display: flex;
          flex-direction: column;
        }
        .blog-list .blog-list-entry {
          list-style-type: none;
          border: 0.5px solid #0e0e0e;
          padding: 20px;
          margin-bottom: 20px;
        }
        .blog-list .blog-list-entry:hover {
          background-color: slategrey;
          color: #fff;
        }
        body {
          background-color: #f7f7f7;
        }
        footer {
          text-align: center;
          padding: 60px 0 30px 0;
          border-top: 1px solid;
        }
        .article-meta {
          list-style-type: none;
          padding: 0;
          margin-bottom: 35px;
          text-align: center;
        }
        .topic-chips {
          margin: 8px;
        }
        .topic-chips .topic-chip {
          padding: 4px 8px;
          border-radius: 25px;
        }
        .topic-chips .topic-chip:hover {
          background-color: slategrey;
          color: #fff;
        }
        .article {
          position: relative;
        }
        .article img,
        .article pre {
          max-width: 100%;
          overflow: scroll;
        }
        .article img code,
        .article pre code {
          background: none;
          color: inherit;
        }
        .article pre {
          background-color: #003c0a;
          color: #fff;
          padding: 8px 12px;
          border-radius: 3px;
        }
        .article code {
          background: #e4e3e3;
          color: #b54200;
          padding: 2px 4px;
          border-radius: 3px;
          overflow-wrap: break-word;
        }
        .view-topics {
          text-decoration: none;
          text-align: right;
        }
        .error404 {
          text-align: center;
          margin-bottom: 50px;
        }
        .error404 h1 {
          font-size: 100px;
          width: fit-content;
          color: #d5d5d5;
          background-color: #0e0e0e;
          padding: 8px 15px;
          border-radius: 15px;
          margin: 50px auto;
        }
        .error404 button {
          border: none;
          padding: 8px 12px;
          color: #0e0e0e;
          background-color: #d5d5d5;
          border-radius: 5px;
          cursor: pointer;
        }
        .share-buttons {
          position: sticky;
          display: flex;
          top: 0;
          left: 0;
          justify-content: space-around;
          background-color: #f7f7f7;
          padding: 10px 80px;
        }
      `}</style>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
        id="ga-script-1"
      />
      <Script strategy="lazyOnload" id="ga-script-2">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GOOGLE_ANALYTICS_ID}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
    </>
  );
}

export default MyApp;
