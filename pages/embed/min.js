import Codearea from "../../components/code";
import Head from "next/head";
import ModalPopUp from "../../components/modal";
import Script from "next/dist/client/script";
import MenuBox from "../../components/MenuBox";
export default function min() {
  return (
    <>
      <Head>
        <title>codeCollab - Edit and Share Code!</title>
      </Head>

      <div id="fullScreen">
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
        <MenuBox
          optionJSX={[
            {
              id: 1,
              jsx: (
                <>
                  <label htmlFor="expireTime">Expire After</label>
                  <select
                    name="expireTime"
                    id="expireTime"
                    defaultValue="36000"
                  >
                    <option value="3600">1 hour</option>
                    <option value="7200">2 hours</option>
                    <option value="36000">10 hours</option>
                    <option value="86400">1 day</option>
                    <option value="172800">2 days</option>
                    <option value="604800">1 week</option>
                    <option value="2629746">1 month</option>
                    <option value="31556952">1 year</option>
                  </select>
                </>
              ),
            },
          ]}
        />
        <Codearea
          languages={[
            { id: 1, name: "Plain text", value: "text" },
            { id: 2, name: "C", value: "c" },
            { id: 3, name: "Cobol", value: "cobol" },
            { id: 4, name: "C++", value: "cpp" },
            { id: 5, name: "C#", value: "csharp" },
            { id: 6, name: "CSS", value: "css" },
            { id: 7, name: "Fortran", value: "fortran" },
            { id: 8, name: "HTML", value: "htmlmixed" },
            { id: 9, name: "Python", value: "python" },
            { id: 10, name: "Java", value: "java" },
            { id: 11, name: "Javascript", value: "javascript" },
            { id: 12, name: "JSX", value: "jsx" },
            { id: 13, name: "Lua", value: "lua" },
            { id: 14, name: "Ruby", value: "ruby" },
            { id: 15, name: "Rust", value: "rust" },
            { id: 16, name: "SASS", value: "sass" },
            { id: 17, name: "Shell", value: "shell" },
            { id: 18, name: "XML", value: "xml" },
            { id: 19, name: "Verilog", value: "verilog" },
            { id: 20, name: "Julia", value: "julia" },
          ]}
          isMin={true}
        />
      </div>
      <Script src="scripts/componentScripts/modalScript.js" />
      <Script
        strategy="beforeInteractive"
        src="scripts/togetherjs/togetherjs-min.js"
      />
    </>
  );
}
