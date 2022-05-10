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
        <a key={obj.id} href={obj.link} className="l">
          {obj.label}
        </a>
      ))}
      {
        //   Should add toggle buttos!
      }
    </div>
  );
}
