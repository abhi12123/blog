import dynamic from "next/dynamic";

const About = dynamic(() => import("./about"));
const Navbar = dynamic(() => import("./navbar"));

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
