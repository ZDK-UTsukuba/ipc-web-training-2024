import Link from "next/link";

const ListItem = ({ id, title, date }) => {
  return (
    <li>
      <div>
        <Link href={`/articles/${id}`}>
          <b>{title}</b>
        </Link>
      </div>
      {date && <div>最終更新：{date}</div>}
    </li>
  );
};

export default ListItem;
