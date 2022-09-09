import Link from "next/link";
import Date from "./date";

export default function BlogListEntry({ postData }) {
  const { id, title, description, date } = postData;
  return (
    <li key={id} className="blog-list-entry">
      <Link href={`/posts/${id}`}>
        <a>
          <h3 className="link">{title}</h3>
        </a>
      </Link>
      <p>{description.slice(0, 200)}...</p>
      <small>
        <Date dateString={date} />
      </small>
    </li>
  );
}
