import About from "./aside";
import Navbar from "./navbar";

export default function Layout({ children, trendingTopics }) {
  return (
    <>
      <Navbar trendingTopics={trendingTopics} />
      <div className="layout-body">
        <main>{children}</main>
        <aside>
          <About />
        </aside>
      </div>
      <footer>
        <small>made using Next.js</small>
      </footer>
    </>
  );
}
