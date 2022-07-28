import Header from "../components/header";
import Codearea from "../components/code";
import Menu from "../components/menu";
import Head from "next/head";
import ModalPopUp from "../components/modal";
import Footer from "../components/footer";
import Script from "next/dist/client/script";
import MenuBox from "../components/MenuBox";
import { useEffect } from "react";

export default function Home() {
  function waitForElm(selector) {
    return new Promise((resolve) => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
      }

      const observer = new MutationObserver((mutations) => {
        if (document.querySelector(selector)) {
          resolve(document.querySelector(selector));
          observer.disconnect();
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    });
  }
  function togetherJSinit() {
    window.BeforeUnloadEvent = () => {
      TogetherJS(this);
    };
    window.TogetherJSConfig_hubBase = "https://codecollab-hub.herokuapp.com";
    //JQuery drag issues fix, declare it before togetherjs
    // Make the DIV element draggable:
    waitForElm("#togetherjs-dock").then((elmnt) => dragElement(elmnt));

    function dragElement(elmnt) {
      console.log(elmnt);
      var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
      if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown =
          dragMouseDown;
      } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
      }

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = elmnt.offsetTop - pos2 + "px";
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
      }

      function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
  }
  useEffect(() => {
    togetherJSinit();
  }, []);
  return (
    <>
      <Head>
        <title>codeCollab - Edit and Share Code!</title>
      </Head>
      <Header />
      <button
        title="Start a collaborative sesssion"
        className="button btn is-size-6 has-text-weight-medium hvrBtn"
        id="start-togetherjs"
        type="button"
        onClick={() => {
          TogetherJS(this);
          return false;
        }}
        data-end-togetherjs-html="End TogetherJS"
      >
        Start a session
      </button>
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
        />
      </div>
      <Footer />
      <Script src="scripts/componentScripts/modalScript.js" />
      {/* <Script src="https://togetherjs.com/togetherjs-min.js" /> */}
      <Script
        strategy="beforeInteractive"
        src="scripts/togetherjs/togetherjs-min.js"
      />
    </>
  );
}
