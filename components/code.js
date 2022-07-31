import Script from "next/dist/client/script";

// Should have default values!

export default function Codearea({ languages, isMin = false }) {
  // Sort by name in object array
  languages.sort(function (a, b) {
    var keyA = a.name.toLowerCase(),
      keyB = b.name.toLowerCase();
    // Compare the 2 dates
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  });
  return (
    <>
      <div className="box" id="Codearea">
        <div
          className="titleBlock"
          style={{
            borderBottom: "2px solid var(--link-primary)",
            padding: "1.5rem",
            display: "grid",
            alignContent: "center",
            justifyContent: "space-between",
            grid: " 'pasteTitleArea languageArea themeArea' ",
          }}
        >
          <input
            type="text"
            name="pasteName"
            id="pasteName"
            placeholder="paste title"
            defaultValue="untitled"
            style={{ gridArea: "pasteTitleArea" }}
          />
          <div className="language" style={{ gridArea: "languageArea" }}>
            <label htmlFor="language">language: </label>
            <select name="language" id="language" defaultValue="text">
              {languages.map((obj) => (
                <option key={obj.id} value={obj.value}>
                  {obj.name}
                </option>
              ))}
            </select>
          </div>
          <div className="theme" style={{ gridArea: "themeArea" }}>
            <label htmlFor="theme">theme: </label>
            <select name="theme" id="theme" defaultValue="monokai">
              <option value="monokai">Monokai</option>
              <option value="dracula">Dracula</option>
              <option value="zenburn">Zenburn</option>
              <option value="ayu-mirage">Ayu-Mirage</option>
              <option value="blackboard">Blackboard</option>
              <option value="cobalt">Cobalt</option>
              <option value="base16-light">Base16 light</option>
              <option value="eclipse">Eclipse</option>
              <option value="mdn-like">MDN like</option>
              <option value="material">Material</option>
            </select>
          </div>
        </div>
        <div id="text-editor">
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
              id="code"
              rows="100"
              style={{ display: "none" }}
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
        <button
          className="button btn is-size-6 has-text-weight-medium hvrBtn"
          id="uploadBtn"
          style={{ height: "3rem", minWidth: "250px" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            width="48"
            style={{ transform: "scale(0.55)", fill: "var(--bg-dark)" }}
          >
            <path d="M12.5 40q-4.3 0-7.4-3.1Q2 33.8 2 29.5q0-3.9 2.475-6.875t6.375-3.575q1-4.85 4.7-7.925T24.1 8.05q5.65 0 9.475 4.075Q37.4 16.2 37.4 21.9v1.2q3.6-.1 6.1 2.325Q46 27.85 46 31.55q0 3.45-2.5 5.95T37.55 40H25.5q-1.2 0-2.1-.9-.9-.9-.9-2.1V24.1l-4.15 4.15-2.15-2.15 7.8-7.8 7.8 7.8-2.15 2.15-4.15-4.15V37h12.05q2.25 0 3.85-1.6t1.6-3.85q0-2.25-1.6-3.85t-3.85-1.6H34.4v-4.2q0-4.45-3.025-7.65t-7.475-3.2q-4.45 0-7.5 3.2t-3.05 7.65h-.95q-3.1 0-5.25 2.175T5 29.45q0 3.1 2.2 5.325T12.5 37h7v3ZM24 25.5Z" />
          </svg>
          Create a paste
        </button>
      </div>
      {/* <Script strategy="beforeInteractive" src="/scripts/lib/codemirror.js" />
      <Script
        strategy="beforeInteractive"
        src="/scripts/addon/closeBrackets.js"
      />
      <Script
        strategy="beforeInteractive"
        src="/scripts/addon/matchBrackets.js"
      />
      <Script strategy="beforeInteractive" src="/scripts/addon/closeTag.js" />
      <Script strategy="beforeInteractive" src="/scripts/addon/matchTags.js" />
      <Script strategy="beforeInteractive" src="/scripts/addon/fullScreen.js" />
      <Script strategy="beforeInteractive" src="/scripts/addon/xml-fold.js" />
      <Script
        strategy="beforeInteractive"
        src="/scripts/addon/fold/foldcode.js"
      />
      <Script
        strategy="beforeInteractive"
        src="/scripts/addon/fold/foldgutter.js"
      />
      <Script
        strategy="beforeInteractive"
        src="/scripts/addon/fold/allfolds.js"
      />
      <Script strategy="beforeInteractive" src="/scripts/addon/lint/lint.js" /> */}
      {!isMin ? (
        <Script
          strategy="beforeInteractive"
          src="https://unpkg.com/tesseract.js@v2.1.0/dist/tesseract.min.js"
        />
      ) : (
        ""
      )}
      <Script
        strategy="beforeInteractive"
        src="https://unpkg.com/jshint@2.13.2/dist/jshint.js"
      />
      <Script
        strategy="beforeInteractive"
        src="https://unpkg.com/jsonlint@1.6.3/web/jsonlint.js"
      />
      <Script
        strategy="beforeInteractive"
        src="https://unpkg.com/csslint@1.0.5/dist/csslint.js"
      />
      <Script
        strategy="beforeInteractive"
        src="https://unpkg.com/htmlhint@1.1.4/dist/htmlhint.js"
      />
      <Script
        strategy="beforeInteractive"
        src="https://unpkg.com/js-yaml@4.1.0/dist/js-yaml.js"
      />
      {!isMin ? (
        <Script type="module" src="/scripts/componentScripts/codeScript.js" />
      ) : (
        <Script
          type="module"
          src="/scripts/componentScripts/codeScript-min.js"
        />
      )}
      {!isMin ? (
        <>
          <Script
            strategy="afterInteractive"
            type="text/javascript"
            src="/scripts/lang-detect/langDetect.js"
          />
          <Script
            strategy="afterInteractive"
            src="/scripts/format-code/formatCode.js"
          />{" "}
        </>
      ) : (
        ""
      )}
      {/* <Script
        strategy="afterInteractive"
        type="module"
        src="/scripts/componentScripts/ocr.js"
      /> */}
    </>
  );
}
