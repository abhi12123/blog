import Link from "next/link";
import { useState } from "react";

export default function Navbar({ trendingTopics }) {
  const [displayNavbar, setDisplayNavbar] = useState(false);
  const handleDisplayNavbar = () => {
    setDisplayNavbar(!displayNavbar);
  };
  return (
    <nav className="navbar">
      <section className="navbar-container logo-name">
        <Link href="/">
          <a>
            <h3>Abhinav VP</h3>
          </a>
        </Link>
        <Link href="https://about.abhinavvp.com">
          <a>About</a>
        </Link>
      </section>
      <section
        className={`trending-topics ${
          displayNavbar ? "mobile-display-navbar" : ""
        }`}
      >
        <p
          className="topics-label"
          id="topics-label"
          onClick={handleDisplayNavbar}
        >
          Trending topics ✨<span className="wave">👉</span>
        </p>
        {trendingTopics?.map((topic) => {
          return (
            <Link href={`/topics/${topic.slug}`} key={topic.slug}>
              <a className="topic">
                #{topic.name}({topic.postsCount})
              </a>
            </Link>
          );
        })}
        <Link href={"/topics"}>and more ..</Link>
      </section>
    </nav>
  );
}
