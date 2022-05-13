import Link from "next/link";

export default function Menu({ items }) {
  return (
    <div
      className="box"
      id="menu"
      style={{
        display: "grid",
        grid: " 'linksArea . . . . toggleButtonsArea' ",
        justifyContent: "space-between",
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
        <label className="svgButton" htmlFor="wordWrapToggle">
          <input
            type="checkbox"
            name="wordWrap"
            id="wordWrapToggle"
            style={{ display: "none" }}
            defaultChecked
          />
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="M34.45 25.15 32.35 23.05 38.3 17.1H5.85V14.1H38.3L32.3 8.1L34.4 6L44 15.6ZM13.55 42 4 32.45 13.6 22.85 15.7 24.95 9.7 30.95H42.15V33.95H9.7L15.65 39.9Z" />
          </svg>
        </label>
      </div>
    </div>
  );
}
