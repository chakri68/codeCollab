export default function ToolBar({ title, link }) {
  return (
    <div className="box ToolBar">
      <p id="pasteTitle" style={{ width: "100%" }}>
        {title}
      </p>
      <div className="tools" style={{ width: "fit-content", marginTop: "5px" }}>
        <label htmlFor="cpyLink" className="svgButton hvrBtn" title="copy link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            width="48"
            style={{ transform: "scale(0.9)" }}
          >
            <path d="M22.5 34H14q-4.25 0-7.125-2.875T4 24q0-4.25 2.875-7.125T14 14h8.5v3H14q-3 0-5 2t-2 5q0 3 2 5t5 2h8.5Zm-6.25-8.5v-3h15.5v3ZM25.5 34v-3H34q3 0 5-2t2-5q0-3-2-5t-5-2h-8.5v-3H34q4.25 0 7.125 2.875T44 24q0 4.25-2.875 7.125T34 34Z" />
          </svg>
          <button id="cpyLink" style={{ display: "none" }}></button>
        </label>
        <label
          htmlFor="embed"
          className="svgButton hvrBtn"
          title="copy embed script"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            width="48"
            style={{ transform: "scale(1.5)" }}
          >
            <path d="M25.7 30q-.75 0-1.225-.475Q24 29.05 24 28.3V26h2.4v1.6h5.2v-2.65h-5.9q-.7 0-1.2-.5t-.5-1.2V19.7q0-.75.475-1.225Q24.95 18 25.7 18h6.6q.75 0 1.225.475Q34 18.95 34 19.7V22h-2.4v-1.6h-5.2v2.65h5.9q.7 0 1.2.5t.5 1.2v3.55q0 .75-.475 1.225Q33.05 30 32.3 30Zm-12 0q-.75 0-1.225-.475Q12 29.05 12 28.3V25h2.4v2.6h4.2V18H21v10.3q0 .75-.475 1.225Q20.05 30 19.3 30Z" />
          </svg>
          <button id="embed" style={{ display: "none" }}></button>
        </label>
      </div>
    </div>
  );
}
