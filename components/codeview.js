import Script from "next/dist/client/script";

// Should have default values!

export default function Codeview({ langauge, code }) {
  return (
    <>
      <div className="box" id="Codeview" style={{ padding: "0 !important" }}>
        <div
          className="titleBlock viewOnly"
          style={{
            borderBottom: "2px solid var(--link-primary)",
            padding: "5px",
            display: "grid",
            alignContent: "center",
            justifyContent: "start",
            padding: "1.5rem",
            gridAutoFlow: "column",
          }}
        >
          <span className="codeViewSpan language" id="viewLanguage">
            {langauge}
          </span>
          <span
            title="Copy code"
            className="codeViewSpan hvrBtn button btn has-text-weight-medium"
            id="cpyCode"
          >
            copy
          </span>
        </div>
        <div id="text-view">
          <form
            method="post"
            id="codeForm"
            target="print_popup"
            onSubmit={() => {
              window.open("about:blank", "print_popup", "width=800,height=600");
            }}
          >
            <textarea
              name="initScript"
              id="codeView"
              rows="100"
              style={{ display: "none" }}
              defaultValue={code}
            />
          </form>
        </div>
      </div>
      <div
        id="codeBtnDiv"
        className="box"
        style={{
          display: "grid",
          gridAutoFlow: "column",
          columnGap: "20px",
          margin: "0 !important",
          padding: "0 !important",
          backgroundColor: "transparent !important",
          boxShadow: "none",
        }}
      >
        <button
          className="button btn is-size-6 has-text-weight-medium hvrBtn"
          style={{ height: "3rem", minWidth: "250px" }}
          id="codeDownloadBtn"
          title="Download the code to your device"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            width="48"
            style={{
              transform: "scale(0.55)",
              fill: "var(--bg-dark)",
            }}
          >
            <path d="M24 32.35 14.35 22.7 16.5 20.55 22.5 26.55V8H25.5V26.55L31.5 20.55L33.65 22.7ZM11 40Q9.8 40 8.9 39.1Q8 38.2 8 37V29.85H11V37Q11 37 11 37Q11 37 11 37H37Q37 37 37 37Q37 37 37 37V29.85H40V37Q40 38.2 39.1 39.1Q38.2 40 37 40Z" />
          </svg>
          Download the code
        </button>
        <button
          type="submit"
          id="compilerBtn"
          form="codeForm"
          className="button btn is-size-6 has-text-weight-medium hvrBtn"
          style={{
            height: "3rem",
            minWidth: "250px",
          }}
          disabled
          title="Run the code in Jdoodle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            width="48"
            style={{ transform: "scale(0.6)", fill: "var(--bg-dark)" }}
          >
            <path d="M16 37.85V9.85L38 23.85ZM19 23.85ZM19 32.4 32.45 23.85 19 15.3Z" />
          </svg>
          Run code using Jdoodle
        </button>
      </div>
      <Script type="module" src="/scripts/componentScripts/codeViewScript.js" />
    </>
  );
}
