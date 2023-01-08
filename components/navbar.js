import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <section className="navbar-container logo-name">
        <Link href="/">
          <a>
            <h3>Abhinav VP</h3>
          </a>
        </Link>
        <div className="right-nav">
          <Link href="/topics">
            <a>Topics</a>
          </Link>
          <Link href="/">
            <a>About</a>
          </Link>
        </div>
      </section>
    </nav>
  );
}
