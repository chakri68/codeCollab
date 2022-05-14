import Script from "next/dist/client/script";

export default function Codearea({ languages }) {
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
          <input
            type="text"
            name="pasteName"
            id="pasteName"
            placeholder="paste title"
            style={{ gridArea: "pasteTitleArea" }}
          />
          <div className="language" style={{ gridArea: "languageArea" }}>
            <label htmlFor="language">language: </label>
            <select name="language" id="language">
              {languages.map((obj) => (
                <option key={obj.id} value={obj.value}>
                  {obj.name}
                </option>
              ))}
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
            <textarea name="initScript" id="code" rows="100" />
          </form>
        </div>
      </div>
      <div id="compilerBtnDiv">
        <button
          type="submit"
          id="compilerBtn"
          form="codeForm"
          className="button btn is-size-6 has-text-weight-medium"
          style={{ width: "100%", height: "2.5rem" }}
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
