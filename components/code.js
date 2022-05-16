import Script from "next/dist/client/script";

export default function Codearea({
  languages,
  title,
  codeString,
  currentLanguage,
  redirect,
}) {
  const languageValues = {
    "plain text": "text",
    python: "python",
    "C++": "cpp",
    Java: "java",
    C: "c",
    Javascript: "javascript",
    Lua: "lua",
    Ruby: "ruby",
    Rust: "rust",
    HTML: "htmlmixed",
    XML: "xml",
    JSX: "jsx",
    CSS: "css",
    SASS: "sass",
    Cobol: "cobol",
    Fortran: "fortran",
    Shell: "shell",
    Verilog: "verilog",
    "C#": "csharp",
  };
  return (
    <>
      <div className="box" id="Codearea">
        <div
          className="titleBlock"
          style={{
            borderBottom: "2px solid var(--link-primary)",
            paddingBottom: "10px",
            display: "grid",
            grid: " 'pasteTitleArea languageArea themeArea' ",
          }}
        >
          {title ? (
            <input
              type="text"
              name="pasteName"
              id="pasteName"
              placeholder="paste title"
              value={title}
              readOnly={true}
              style={{ gridArea: "pasteTitleArea" }}
            />
          ) : (
            <input
              type="text"
              name="pasteName"
              id="pasteName"
              placeholder="paste title"
              style={{ gridArea: "pasteTitleArea" }}
            />
          )}
          <div className="language" style={{ gridArea: "languageArea" }}>
            <label htmlFor="language">language: </label>
            <select name="language" id="language">
              {currentLanguage ? (
                <option value={languageValues.currentLanguage}>
                  {currentLanguage}
                </option>
              ) : (
                languages.map((obj) => (
                  <option key={obj.id} value={obj.value}>
                    {obj.name}
                  </option>
                ))
              )}
            </select>
          </div>
          <div className="theme" style={{ gridArea: "themeArea" }}>
            <label htmlFor="theme">theme: </label>
            <select name="theme" id="theme">
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
        <div id="text-editor" style={{ marginTop: "10px" }}>
          <form
            method="post"
            id="codeForm"
            target="print_popup"
            onSubmit={() => {
              window.open("about:blank", "print_popup", "width=800,height=600");
            }}
          >
            {codeString ? (
              <textarea
                name="initScript"
                id="code"
                rows="100"
                value={codeString}
                readOnly={true}
              />
            ) : (
              <textarea name="initScript" id="code" rows="100" />
            )}
          </form>
        </div>
      </div>
      <div
        id="codeBtnDiv"
        style={
          redirect
            ? {
                display: "grid",
                columnGap: "20px",
                rowGap: "15px",
                gridTemplateColumns: "auto auto",
              }
            : {
                display: "grid",
                columnGap: "20px",
                rowGap: "15px",
                gridTemplateColumns: "auto auto auto",
              }
        }
      >
        {!redirect ? (
          <button
            className="button btn is-size-6 has-text-weight-medium"
            style={{
              height: "3rem",
              width: "100%",
            }}
            id="codeUploadBtn"
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
              <path d="M12.5 40Q8.2 40 5.1 36.9Q2 33.8 2 29.5Q2 25.6 4.475 22.625Q6.95 19.65 10.85 19.05Q11.85 14.2 15.55 11.125Q19.25 8.05 24.1 8.05Q29.75 8.05 33.575 12.125Q37.4 16.2 37.4 21.9V23.1Q41 23 43.5 25.425Q46 27.85 46 31.55Q46 35 43.5 37.5Q41 40 37.55 40H25.5Q24.3 40 23.4 39.1Q22.5 38.2 22.5 37V24.1L18.35 28.25L16.2 26.1L24 18.3L31.8 26.1L29.65 28.25L25.5 24.1V37Q25.5 37 25.5 37Q25.5 37 25.5 37H37.55Q39.8 37 41.4 35.4Q43 33.8 43 31.55Q43 29.3 41.4 27.7Q39.8 26.1 37.55 26.1H34.4V21.9Q34.4 17.45 31.375 14.25Q28.35 11.05 23.9 11.05Q19.45 11.05 16.4 14.25Q13.35 17.45 13.35 21.9H12.4Q9.3 21.9 7.15 24.075Q5 26.25 5 29.45Q5 32.55 7.2 34.775Q9.4 37 12.5 37H19.5V40ZM24 25.5Q24 25.5 24 25.5Q24 25.5 24 25.5Q24 25.5 24 25.5Q24 25.5 24 25.5Q24 25.5 24 25.5Q24 25.5 24 25.5Q24 25.5 24 25.5Q24 25.5 24 25.5Q24 25.5 24 25.5Q24 25.5 24 25.5Q24 25.5 24 25.5Q24 25.5 24 25.5Q24 25.5 24 25.5Q24 25.5 24 25.5Q24 25.5 24 25.5Q24 25.5 24 25.5Q24 25.5 24 25.5Q24 25.5 24 25.5Z" />
            </svg>
            Create a paste
          </button>
        ) : (
          ""
        )}
        <button
          className="button btn is-size-6 has-text-weight-medium"
          style={{ height: "3rem", width: "100%" }}
          id="codeDownloadBtn"
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
          className="button btn is-size-6 has-text-weight-medium"
          style={{
            height: "3rem",
            width: "100%",
          }}
          disabled
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
      <Script strategy="beforeInteractive" src="/scripts/lib/codemirror.js" />
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
      <Script strategy="beforeInteractive" src="/scripts/addon/lint/lint.js" />
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
      <Script strategy="beforeInteractive" src="/scripts/addon/simple.js" />
      <Script src="/scripts/componentScripts/codeScript.js" />
    </>
  );
}
