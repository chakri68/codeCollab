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
          <textarea name="code" id="code" rows="100" />
        </div>
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
      <Script strategy="beforeInteractive" src="/scripts/addon/fullScreen.js" />
      <Script src="/scripts/componentScripts/codeScript.js" />
    </>
  );
}
