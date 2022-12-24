import About from "./about";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
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
