import Link from "next/link";

export default function Menu({ items }) {
  return (
    <div
      className="box"
      id="menu"
      style={{
        display: "grid",
        grid: " 'linksArea . . . . toggleButtonsArea' ",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          rowGap: "10px",
          background: "var(--bg-light)",
          paddingTop: "15px",
          paddingBottom: "15px",
          gridArea: "linksArea",
        }}
      >
        {items.map((obj) => (
          <Link key={obj.id} href={obj.url}>
            <span className="l">{obj.label}</span>
          </Link>
        ))}
      </div>
      <div className="toggleButtons" style={{ gridArea: "toggleButtonsArea" }}>
        <label className="svgButton" htmlFor="fullScreenToggle">
          <input
            type="checkbox"
            name="fullscreen"
            id="fullScreenToggle"
            style={{ display: "none" }}
          />
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="M10 38V28.35H13V35H19.65V38ZM10 19.65V10H19.65V13H13V19.65ZM28.35 38V35H35V28.35H38V38ZM35 19.65V13H28.35V10H38V19.65Z" />
          </svg>
        </label>
        {/* <label className="svgButton" htmlFor="wordWrapToggle">
          <input
            type="checkbox"
            name="wordWrap"
            id="wordWrapToggle"
            style={{ display: "none" }}
          />
          
        </label> */}
      </div>
    </div>
  );
}
