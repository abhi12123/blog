import dynamic from "next/dynamic";
import Link from "next/link";
const Date = dynamic(() => import("./date"));

export default function BlogListEntry({ postData }) {
  const { id, title, description, date } = postData;
  return (
    <Link href={`/posts/${id}`}>
      <a className="blog-list-entry" key={id}>
        <li>
          <h3>{title}</h3>
          <p>{description.slice(0, 200)}...</p>
          {date ? (
            <small>
              <Date dateString={date} />
            </small>
          ) : null}
        </li>
      </a>
    </Link>
  );
}
