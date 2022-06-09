import Header from "../components/header";
import Codearea from "../components/code";
import Menu from "../components/menu";
import Head from "next/head";
import ModalPopUp from "../components/modal";
import Script from "next/dist/client/script";

export default function Home() {
  return (
    <>
      <Head>
        <title>codeCollab - Edit and Share Code!</title>
      </Head>
      <Header />
      <ModalPopUp
        id="settingsModal"
        titleJSX="Settings"
        options={
          <>
            <label htmlFor="lintToggleBtn">Toggle Lint</label>
            <input id="lintToggleBtn" type="checkbox" />
            <label htmlFor="fontStyleBtn">Font Style</label>
            <select id="fontStyleBtn">
              <option
                value="Fira Code, monospace"
                style={{ fontFamily: "Fira Code, monospace" }}
              >
                default
              </option>
              <option value="monospace" style={{ fontFamily: "monospace" }}>
                monospace
              </option>
              <option
                value="Ubuntu Mono, monospace"
                style={{ fontFamily: "Ubuntu Mono, monospace" }}
              >
                ubuntu mono
              </option>
              <option
                value="IBM Plex Mono, monospace"
                style={{ fontFamily: "IBM Plex Mono, monospace" }}
              >
                IBM Plex Mono
              </option>
              <option
                value="Nova Mono, monospace"
                style={{ fontFamily: "Nova Mono, monospace" }}
              >
                Nova Mono
              </option>
              <option
                value="Syne Mono, monospace"
                style={{ fontFamily: "Syne Mono, monospace" }}
              >
                Syne Mono
              </option>
              <option
                value="Major Mono Display, monospace"
                style={{ fontFamily: "Major Mono Display, monospace" }}
              >
                Major Mono Display
              </option>
            </select>
            <label htmlFor="prmyColorBtn">Primary Color</label>
            <input id="prmyColorBtn" type="color" defaultValue="#0cf07b" />
          </>
        }
      />
      <Menu
        items={[
          { id: 1, label: "home", url: "/" },
          { id: 2, label: "login", url: "/" },
          {
            id: 3,
            label: "github",
            url: "https://github.com/chakri68/codeCollab",
          },
          { id: 4, label: "api", url: "/" },
          {
            id: 5,
            label: "changelog",
            url: "https://github.com/chakri68/codeCollab/tree/main",
          },
          { id: 6, label: "legal", url: "/" },
        ]}
      />
      <ModalPopUp
        id="errorPopUp"
        titleJSX="Error"
        prColor="var(--error-text)"
        options={
          <>
            <p>The file format is not supported!</p>
          </>
        }
      />
      <Codearea
        languages={[
          { id: 1, name: "plain text", value: "text" },
          { id: 3, name: "python", value: "python" },
          { id: 11, name: "C++", value: "cpp" },
          { id: 10, name: "Java", value: "java" },
          { id: 9, name: "C", value: "c" },
          { id: 6, name: "Javascript", value: "javascript" },
          { id: 2, name: "Lua", value: "lua" },
          { id: 5, name: "Ruby", value: "ruby" },
          { id: 4, name: "Rust", value: "rust" },
          { id: 12, name: "HTML", value: "htmlmixed" },
          { id: 13, name: "XML", value: "xml" },
          { id: 7, name: "JSX", value: "jsx" },
          { id: 8, name: "CSS", value: "css" },
          { id: 14, name: "SASS", value: "sass" },
          { id: 15, name: "Cobol", value: "cobol" },
          { id: 16, name: "Fortran", value: "fortran" },
          { id: 17, name: "Shell", value: "shell" },
          { id: 18, name: "Verilog", value: "verilog" },
          { id: 19, name: "C#", value: "csharp" },
        ]}
      />
      <Script src="scripts/componentScripts/modalScript.js"></Script>
    </>
  );
}
