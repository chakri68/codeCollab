export default function Dropdown({ title, bodyJSX, className }) {
  return (
    <div className={`dropdown modalSubHeading`}>
      <div
        className={`dropdown-trigger dotted-border ${
          className ? className : ""
        }`}
      >
        <p aria-haspopup="true" aria-controls="dropdown-menu">
          <span>{title}</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </p>
      </div>
      <div
        className="dropdown-menu height-transitions"
        role="menu"
        style={{
          backgroundColor: "transparent",
          // display: "grid",
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
