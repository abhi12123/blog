export default function MetaTags({ title, description, contentLink }) {
  return (
    <>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="article" />
      <meta
        name="google-site-verification"
        content="taZR2xhzntQ4ka8XAUECwFF_zQPzV6PdacwCKMOauGo"
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/profile-pic.png" />
      <meta property="og:url" content={contentLink} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/profile-pic.png" />
      <meta name="twitter:site" content="@abhi_vp_" />
      <meta name="twitter:creator" content="@abhi_vp_" />
    </>
  );
}
