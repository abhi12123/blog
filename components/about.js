import Link from "next/link";

export default function About() {
  return (
    <section className="about-section">
      <div className="pixel"></div>
      <div className="details">
        <p>
          A web developer based in <b>Kerala, India</b> 📍
        </p>
        <p>
          Currently working in{" "}
          <b>
            <a target={"_blank"} href="https://typeset.io/" rel="noreferrer">
              SciSpace
            </a>
          </b>{" "}
          💼
        </p>
        <p>
          <b>Feel free to reach out to me ! 📚</b>
          <br />
          <Link href="https://www.linkedin.com/in/abhinavvp/">
            <a>Linkedin 🔗 </a>
          </Link>
          <br />
          <Link href="https://github.com/abhi12123">
            <a>Github 🔗 </a>
          </Link>
          <br />
          <Link href="mailto:vp.abhinav@outlook.com">
            <a>Email 🔗 </a>
          </Link>
          <br />
          <Link href="https://twitter.com/abhi_vp_">
            <a>Twitter 🔗 </a>
          </Link>
        </p>
      </div>
    </section>
  );
}
