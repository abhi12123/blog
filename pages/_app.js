import Head from "next/head";
import Script from "next/script";
// comment out for style changes
// import "../styles/globals.scss";
import { DEFAULT_TITILE, GOOGLE_ANALYTICS_ID } from "./constants";

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
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          padding: 0;
          margin: 0;
        }
        * {
          box-sizing: border-box;
        }
        .link {
          color: #000;
        }
        .navbar {
          background-color: #0e0e0e;
        }
        .navbar .navbar-container {
          max-width: 1024px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: auto;
          padding: 0 10px;
        }
        .navbar .trending-topics {
          max-width: 1024px;
          margin: auto;
          display: flex;
          padding: 0 10px;
          gap: 15px;
        }
        .navbar .trending-topics .topic {
          background-color: #d5d5d5;
          color: #0e0e0e;
          padding: 1px 5px;
          border-radius: 3px;
          margin-bottom: 8px;
        }
        .navbar .trending-topics .topic:hover {
          box-shadow: white 0px 0px 1px 1px;
        }
        .navbar a {
          color: white;
          text-decoration: none;
        }
        .navbar .logo-name {
          padding: 20px 10px 8px 10px;
        }
        .navbar .logo-name h3 {
          margin: 0;
        }
        .topics-label {
          margin: 0;
          margin-bottom: 8px;
          color: #d5d5d5;
        }
        .nav-items {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          margin: 60px 0;
        }
        .nav-items a {
          color: inherit;
          text-decoration: none;
        }
        .nav-item {
          padding: 10px 20px;
          border-radius: 8px;
          background-color: #d5d5d5;
        }
        .nav-item:hover {
          box-shadow: #b0b0b0 8c 1px 3px 9px 0px;
        }
        .layout-body {
          display: flex;
          max-width: 1024px;
          margin: auto;
          padding: 0 10px;
          justify-content: space-between;
          min-height: calc(100vh - 160px);
        }
        .layout-body aside {
          width: 200px;
          max-width: 200px;
          width: 100%;
        }
        .layout-body main {
          width: calc(100% - 230px);
        }
        .next-post {
          text-align: right;
        }
        .landing-page-hero h1 {
          font-size: 40px;
        }
        .landing-page-hero h1 small {
          color: #963737;
        }
        .landing-page-hero h2 {
          margin: 0;
          text-align: right;
        }
        .title1 {
          font-size: 40px;
        }
        @media only screen and (max-width: 600px) {
          .nav-items {
            flex-direction: column;
          }
          .trending-topics {
            flex-direction: column;
            gap: 0px !important;
            align-items: center;
          }
          .trending-topics p {
            display: block;
          }
          .trending-topics a {
            display: none;
          }
          .mobile-display-navbar a {
            display: block;
          }
        }
        @media only screen and (max-width: 900px) {
          .layout-body {
            flex-direction: column;
          }
          .layout-body main {
            width: 100%;
          }
          .layout-body aside {
            max-width: 100%;
          }
        }
        .wave {
          animation-name: wave-animation;
          /* Refers to the name of your @keyframes element below */
          animation-duration: 2.5s;
          /* Change to speed up or slow down */
          animation-iteration-count: infinite;
          /* Never stop waving :) */
          transform-origin: 70% 70%;
          /* Pivot around the bottom-left palm */
          display: inline-block;
        }
        @keyframes wave-animation {
          /* The following five values can be played with to make the waving more or less extreme */
          /* Reset for the last half to pause */
          0% {
            transform: rotate(0deg);
          }
          10% {
            transform: rotate(14deg);
          }
          20% {
            transform: rotate(-8deg);
          }
          30% {
            transform: rotate(14deg);
          }
          40% {
            transform: rotate(-4deg);
          }
          50% {
            transform: rotate(10deg);
          }
          60% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        .blog-list {
          padding: 0;
          display: flex;
          flex-direction: column;
        }
        .blog-list .blog-list-entry {
          list-style-type: none;
          border-top: 0.5px solid #0e0e0e;
          padding: 20px 0px;
          color: inherit;
          text-decoration: none;
        }
        .blog-list .blog-list-entry small {
          color: #0e0e0e;
        }
        .blog-list .blog-list-entry a {
          color: inherit;
          text-decoration: none;
        }
        .blog-list h3 {
          margin: 0;
        }
        .blog-list h3:hover {
          color: #0e0e0e;
        }
        body {
          background-color: #f7f7f7;
        }
        .pixel {
          position: absolute;
          left: 80px;
          top: 100px;
          width: 8px;
          height: 8px;
          background: #191516;
          box-shadow: 0px 0px #191516, 0px 8px #191516, 40px 0px #191516,
            40px 8px #191516, 24px -48px #262221, -16px -40px #0d0c0c,
            -8px -40px #0d0c0c, 0px -40px #262221, 8px -40px #262221,
            16px -40px #262221, 24px -40px #262221, 32px -40px #262221,
            32px -40px #262221, 40px -40px #262221, -24px -32px #0d0c0c,
            -16px -32px #0d0c0c, -8px -32px #0d0c0c, 0px -32px #262221,
            8px -32px #262221, 16px -32px #262221, 24px -32px #262221,
            32px -32px #262221, 40px -32px #262221, 48px -32px #262221,
            -24px -24px #0d0c0c, -16px -24px #0d0c0c, -8px -24px #0d0c0c,
            0px -24px #0d0c0c, 8px -24px #262221, 16px -24px #262221,
            24px -24px #262221, 32px -24px #262221, 40px -24px #262221,
            48px -24px #262221, -24px -16px #0d0c0c, -16px -16px #0d0c0c,
            8px -16px #0d0c0c, 16px -16px #0d0c0c, 24px -16px #262221,
            32px -16px #262221, 32px -16px #262221, 40px -16px #262221,
            48px -16px #262221, 56px -16px #262221, -24px -8px #0d0c0c,
            -16px -8px #0d0c0c, -16px 0px #0d0c0c, -8px -16px #855644,
            0px -16px #855644, -8px -8px #855644, 0px -8px #855644,
            8px -8px #855644, 16px -8px #855644, 24px -8px #855644,
            32px -8px #855644, 40px -8px #855644, -24px 0px #bd8968,
            -8px 0px #855644, 8px 0px #bd8968, 16px 0px #bd8968,
            24px 0px #bd8968, 32px 0px #bd8968, -24px 8px #855644,
            -16px 8px #855644, -8px 8px #855644, 8px 8px #bd8968,
            16px 8px #bd8968, 24px 8px #bd8968, 32px 8px #bd8968,
            -16px 16px #855644, -8px 16px #855644, 0px 16px #855644,
            8px 16px #bd8968, 16px 16px #bd8968, 24px 16px #bd8968,
            32px 16px #bd8968, 40px 16px #bd8968, -8px 24px #855644,
            0px 24px #855644, 8px 24px #855644, 16px 24px #bd8968,
            24px 24px #bd8968, 32px 24px #bd8968, 56px -56px #191516,
            -32px -48px #191516, -16px -48px #191516, -8px -48px #191516,
            0px -48px #191516, 8px -48px #191516, 16px -48px #191516,
            24px -56px #191516, 32px -48px #191516, 40px -48px #191516,
            48px -48px #191516, -24px -40px #191516, 48px -40px #191516,
            -32px -32px #191516, 56px -32px #191516, -32px -24px #191516,
            56px -24px #191516, -32px -16px #191516, 64px -16px #191516,
            -32px -8px #191516, 48px -8px #191516, 56px -8px #191516,
            -32px 0px #191516, 48px 0px #191516, -32px 8px #191516,
            48px 8px #191516, -24px 16px #191516, 48px 16px #191516,
            -16px 24px #191516, 40px 24px #191516, -8px 32px #191516,
            0px 32px #191516, 8px 32px #191516, 16px 32px #191516,
            24px 32px #191516, 32px 32px #191516, -16px 32px #5f1c36,
            -24px 40px #5f1c36, -16px 40px #5f1c36, -8px 40px #5f1c36,
            -8px 40px #5f1c36, 0px 40px #5f1c36, 8px 40px #5f1c36,
            16px 40px #5f1c36, 24px 40px #5f1c36, -8px 48px #5f1c36,
            0px 48px #5f1c36, 8px 48px #bb3435, 16px 48px #bb3435,
            24px 48px #bb3435, -24px 48px #855644, 40px 48px #bd8968,
            -8px 56px #1b2124, 0px 56px #1b2124, 8px 56px #242c2e,
            16px 56px #242c2e, 24px 56px #242c2e, -8px 64px #1b2124,
            24px 64px #1b2124, -24px 32px #191516, -32px 40px #191516,
            32px 40px #191516, 40px 40px #191516, -32px 48px #191516,
            -16px 48px #191516, 32px 48px #191516, 48px 48px #191516,
            -32px 56px #191516, -24px 56px #191516, -16px 56px #191516,
            32px 56px #191516, 40px 56px #191516, 48px 56px #191516,
            -16px 64px #191516, 0px 64px #191516, 16px 64px #191516,
            32px 64px #191516, -16px 72px #191516, -8px 72px #191516,
            16px 72px #191516, 24px 72px #191516, -48px 80px #b1b1b1,
            -40px 80px #b1b1b1, -32px 80px #b1b1b1, -24px 80px #b1b1b1,
            -16px 80px #b1b1b1, -8px 80px #b1b1b1, 0px 80px #b1b1b1,
            8px 80px #b1b1b1, 16px 80px #b1b1b1, 24px 80px #b1b1b1,
            32px 80px #b1b1b1, 40px 80px #b1b1b1, 48px 80px #b1b1b1,
            56px 80px #b1b1b1, 64px 80px #b1b1b1;
          /* eye right */
          /* eye left */
          /* hair */
          /* face */
          /* face */
          /* stroke head */
          /* cloth */
          /* hands */
          /* pants */
          /* stroke body */
          /* ground */
        }
        .about-section {
          position: relative;
          background-color: #d5d5d5;
          padding: 12px;
          border-radius: 0 0 5px 5px;
          margin-bottom: 50px;
        }
        .about-section .details {
          padding-top: 200px;
        }
        .about-section a {
          text-decoration: none;
          color: #000;
        }
        footer {
          text-align: center;
          background-color: #0e0e0e;
          color: white;
          padding: 60px 0 30px 0;
        }
        .article-meta {
          list-style-type: none;
          padding: 0;
        }
        .article-meta a {
          color: inherit;
          text-decoration: none;
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
          color: white;
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
          color: #000;
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
          left: 0px;
          justify-content: space-around;
          background-color: #d5d5d5;
          padding: 10px 80px;
        }
        .other-sources {
          background-color: #d5d5d5;
          padding: 10px;
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
