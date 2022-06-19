import Header from "../components/header";
import Codearea from "../components/code";
import Menu from "../components/menu";
import Head from "next/head";
import ModalPopUp from "../components/modal";
import Footer from "../components/footer";
import Script from "next/dist/client/script";

export default function Home() {
  return (
    <>
      <Head>
        <title>codeCollab - Edit and Share Code!</title>
      </Head>
      <Header />
      <div id="fullScreen">
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
          id="customModal"
          titleJSX="Custom"
          className="pop-down"
          options={
            <>
              <p>Custom</p>
            </>
          }
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
            { id: 1, name: "Plain text", value: "text" },
            { id: 9, name: "C", value: "c" },
            { id: 15, name: "Cobol", value: "cobol" },
            { id: 11, name: "C++", value: "cpp" },
            { id: 19, name: "C#", value: "csharp" },
            { id: 8, name: "CSS", value: "css" },
            { id: 16, name: "Fortran", value: "fortran" },
            { id: 12, name: "HTML", value: "htmlmixed" },
            { id: 3, name: "Python", value: "python" },
            { id: 10, name: "Java", value: "java" },
            { id: 6, name: "Javascript", value: "javascript" },
            { id: 7, name: "JSX", value: "jsx" },
            { id: 2, name: "Lua", value: "lua" },
            { id: 5, name: "Ruby", value: "ruby" },
            { id: 4, name: "Rust", value: "rust" },
            { id: 14, name: "SASS", value: "sass" },
            { id: 17, name: "Shell", value: "shell" },
            { id: 13, name: "XML", value: "xml" },
            { id: 18, name: "Verilog", value: "verilog" },
          ]}
        />
      </div>
      <Footer />
      <Script src="scripts/componentScripts/modalScript.js"></Script>
    </>
  );
}
