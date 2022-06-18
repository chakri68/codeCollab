export default function Dropdown({ title, bodyJSX, className }) {
  return (
    <div className={`dropdown modalSubHeading`}>
      <div
        className={`dropdown-trigger dotted-border ${
          className ? className : ""
        }`}
        style={{
          display: "grid",
          gridAutoFlow: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span>{title}</span>
        <label
          className="svgButton hvrBtn"
          style={{
            height: "2rem",
          }}
        >
          <svg
            style={{ position: "relative", bottom: "7px" }}
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            width="48"
          >
            <path d="M24 30 14 20.05H34Z" />
          </svg>
        </label>
      </div>
      <div
        className="dropdown-menu height-transitions"
        role="menu"
        style={{
          backgroundColor: "transparent",
          display: "grid",
          gridTemplateColumns: "auto 100px",
          justifyContent: "space-between",
          justifyItems: "stretch",
          alignItems: "center",
          rowGap: "10px",
          padding: "10px 10px 0 10px",
          position: "static",
        }}
      >
        {bodyJSX}
      </div>
    </div>
  );
}
