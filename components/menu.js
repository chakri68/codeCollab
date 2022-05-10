import Link from "next/link";

export default function Menu({ items }) {
  return (
    <div
      className="box"
      id="menu"
      style={{
        display: "flex",
        background: "var(--bg-light)",
        paddingTop: "15px",
        paddingBottom: "15px",
      }}
    >
      {items.map((obj) => (
        <Link key={obj.id} href={obj.url} className="l">
          {obj.label}
        </Link>
      ))}
      {
        //   Should add toggle buttos!
      }
    </div>
  );
}
