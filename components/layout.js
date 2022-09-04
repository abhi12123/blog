import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <nav className="navbar">
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
      <footer>
        <hr />
        <small>made using Next.js</small>
      </footer>
    </div>
  );
}
