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
            grid: " 'pasteTitleArea languageArea' ",
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
        </div>
        {/* <hr style={{ backgroundColor: "var(--link-primary)" }} /> */}
        <div id="text-editor" style={{ marginTop: "10px" }}>
          {/* <textarea name="code" id="code"></textarea> */}
        </div>
      </div>
      <Script strategy="beforeInteractive" src="/scripts/lib/codemirror.js" />
      <Script
        strategy="beforeInteractive"
        src="/scripts/mode/javascript/javascript.js"
      />
      <Script src="/scripts/componentScripts/codeScript.js" />
    </>
  );
}
