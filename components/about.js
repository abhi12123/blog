import Link from "next/link";
import {
  GITHUB_ID,
  LINKEDIN_ID,
  MAIL_ID,
  SCISPACE_URL,
  TWITTER_ID,
} from "../../utils/constants";

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
            <a target={"_blank"} href={SCISPACE_URL} rel="noreferrer">
              SciSpace
            </a>
          </b>{" "}
          💼
        </p>
        <p>
          <b>Feel free to reach out to me ! 📚</b>
          <br />
          <Link href={`https://www.linkedin.com/in/${LINKEDIN_ID}`}>
            <a>Linkedin 🔗 </a>
          </Link>
          <br />
          <Link href={`https://github.com/${GITHUB_ID}`}>
            <a>Github 🔗 </a>
          </Link>
          <br />
          <Link href={`mailto:${MAIL_ID}`}>
            <a>Email 🔗 </a>
          </Link>
          <br />
          <Link href={`https://twitter.com/${TWITTER_ID}`}>
            <a>Twitter 🔗 </a>
          </Link>
        </p>
      </div>
    </section>
  );
}
