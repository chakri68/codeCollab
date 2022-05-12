import Script from "next/dist/client/script";
import Head from "next/head";

export default function Codearea({ languages }) {
  // const [isPresent, setIsPresent] = useState(false);
  // const languageHandler = () => {
  //   if (isPresent) {
  //     document.getEl;
  //   }
  // };
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </Head>
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
            </select>
          </div>
        </div>
        {/* <hr style={{ backgroundColor: "var(--link-primary)" }} /> */}
        <div id="text-editor" style={{ marginTop: "10px" }}>
          <textarea name="code" id="code" rows="100" />
        </div>
      </div>
      <Script strategy="beforeInteractive" src="/scripts/lib/codemirror.js" />
      {/* <Script
        strategy="beforeInteractive"
        src="/scripts/mode/javascript/javascript.js"
      /> */}
      {/* <Script src="/scripts/componentScripts/checkLanguage.js"></Script> */}
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
