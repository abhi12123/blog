import Script from "next/script";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-GZTPXHWFZQ`}
        id="ga-script-1"
      />
      <Script strategy="lazyOnload" id="ga-script-2">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-GZTPXHWFZQ', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
    </>
  );
}

export default MyApp;
