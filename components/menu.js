import Link from "next/link";
import Dropdown from "./dropdown";
import ModalPopUp from "./modal";

// Giving default values is important!

export default function Menu({ items }) {
  return (
    <>
      <ModalPopUp
        id="settingsModal"
        titleJSX="Settings"
        settings={true}
        options={
          <>
            <Dropdown
              className="is-active"
              title="Appearance"
              bodyJSX={
                <>
                  <label
                    htmlFor="fontStyleBtn"
                    title="Stylize the font in the website"
                  >
                    Font Style
                  </label>
                  <select id="fontStyleBtn" defaultValue="Fira Code, monospace">
                    <option
                      value="Fira Code, monospace"
                      style={{ fontFamily: "Fira Code, monospace" }}
                    >
                      Default
                    </option>
                    <option
                      value="monospace"
                      style={{ fontFamily: "monospace" }}
                    >
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
                  <label htmlFor="pageTheme">Page Theme</label>
                  <select
                    name="pageTheme"
                    id="pageTheme"
                    defaultValue="codeCollab"
                  >
                    <option value="codeCollab">Default</option>
                    <option value="codeEditor">Follow code-editor</option>
                  </select>
                  <label htmlFor="customToggle">Override Theme Color</label>
                  <input
                    type="checkbox"
                    name="customToggle"
                    id="customToggle"
                    defaultChecked={false}
                  />
                  <label
                    htmlFor="prmyColorBtn"
                    title="Change the primary color"
                  >
                    Primary Color
                  </label>
                  <input
                    id="prmyColorBtn"
                    type="color"
                    defaultValue="#0cf07b"
                    title="Primary color"
                  />
                </>
              }
            />
            {/*<p
              className="modalSubHeading .dotted-border"
              // style={{
              //   color: "var(--text-gray)",
              //   gridColumnStart: "1",
              //   gridColumnEnd: "3",
              //   borderBottom: "1px dotted var(--text-gray)",
              //   paddingBottom: "5px",
              //   marginBottom: "7px",
              // }}
            >
              Appearance
            </p> */
            /* <label
              htmlFor="fontStyleBtn"
              title="Stylize the font in the website"
            >
              Font Style
            </label>
            <select id="fontStyleBtn">
              <option
                value="Fira Code, monospace"
                style={{ fontFamily: "Fira Code, monospace" }}
              >
                Default
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
            <label htmlFor="pageTheme">Page Theme</label>
            <select name="pageTheme" id="pageTheme" defaultValue="default">
              <option value="codeCollab">Default</option>
              <option value="codeEditor">Follow code-editor</option>
            </select>
            <label htmlFor="customToggle">Override Theme Color</label>
            <input
              type="checkbox"
              name="customToggle"
              id="customToggle"
              defaultChecked={false}
            />
            <label htmlFor="prmyColorBtn" title="Change the primary color">
              Primary Color
            </label>
            <input
              id="prmyColorBtn"
              type="color"
              defaultValue="#0cf07b"
              title="Primary color"
            />*/}
            <Dropdown
              className="is-active"
              title="Text Editor"
              bodyJSX={
                <>
                  <label
                    htmlFor="code-font-size"
                    title="Font size in the code-editor"
                  >
                    Font Size
                  </label>
                  <select
                    name="code-font-size"
                    id="code-font-size"
                    defaultValue="normal"
                    title="Font size in the code-editor"
                  >
                    <option value="x-small">Extra small</option>
                    <option value="small">Small</option>
                    <option value="normal">Normal</option>
                    <option value="large">Large</option>
                    <option value="x-large">Extra Large</option>
                  </select>
                  <label
                    htmlFor="copyBehaviour"
                    title="Select what happens when you select a new file"
                  >
                    Copy Behaviour
                  </label>
                  <select
                    name="copyBehaviour"
                    id="copyBehaviour"
                    title="Select what happens when you select a new file"
                    defaultValue="append"
                  >
                    <option value="append">Append</option>
                    <option value="replace">Replace</option>
                  </select>
                  <label
                    htmlFor="keyMap"
                    title="Select the keyboard shortcut style"
                  >
                    Key Maps
                  </label>
                  <select
                    name="keyMap"
                    id="keyMap"
                    title="Select the keyboard shortcut style"
                    defaultValue="default"
                  >
                    <option value="default">Default</option>
                    <option value="emacs">Emacs</option>
                    <option value="sublime">Sublime</option>
                    <option value="vim">Vim</option>
                  </select>
                  <label htmlFor="tabSize">Select Indentation</label>
                  <select name="tabSize" id="tabSize" defaultValue="2">
                    <option value="2">2</option>
                    <option value="4">4</option>
                  </select>
                  <label
                    htmlFor="lintToggleBtn"
                    title="Toogle linting - showing errors"
                  >
                    Toggle Lint
                  </label>
                  <input
                    id="lintToggleBtn"
                    title="Toogle linting - showing errors"
                    type="checkbox"
                  />
                  <label htmlFor="wordWrapToggle" title="Toggle word-wrap">
                    Word Wrap
                  </label>
                  <input
                    type="checkbox"
                    name="wordWrap"
                    id="wordWrapToggle"
                    defaultChecked={true}
                  />
                  {/* <input type="range" name="code-font-size" id="code-font-size" /> */}
                </>
              }
            />
            {/* <p className="modalSubHeading dotted-border">Text Editor</p> */}
            {/* <label
              htmlFor="code-font-size"
              title="Font size in the code-editor"
            >
              Font Size
            </label>
            <select
              name="code-font-size"
              id="code-font-size"
              defaultValue="normal"
              title="Font size in the code-editor"
            >
              <option value="x-small">Extra small</option>
              <option value="small">Small</option>
              <option value="normal">Normal</option>
              <option value="large">Large</option>
              <option value="x-large">Extra Large</option>
            </select>
            <label
              htmlFor="copyBehaviour"
              title="Select what happens when you select a new file"
            >
              Copy Behaviour
            </label>
            <select
              name="copyBehaviour"
              id="copyBehaviour"
              title="Select what happens when you select a new file"
            >
              <option value="append">Append</option>
              <option value="replace">Replace</option>
            </select>
            <label htmlFor="keyMap" title="Select the keyboard shortcut style">
              Key Maps
            </label>
            <select
              name="keyMap"
              id="keyMap"
              title="Select the keyboard shortcut style"
              defaultValue="default"
            >
              <option value="default">Default</option>
              <option value="emacs">Emacs</option>
              <option value="sublime">Sublime</option>
              <option value="vim">Vim</option>
            </select>
            <label htmlFor="tabSize">Select Indentation</label>
            <select name="tabSize" id="tabSize">
              <option value="2">2</option>
              <option value="4">4</option>
            </select>
            <label
              htmlFor="lintToggleBtn"
              title="Toogle linting - showing errors"
            >
              Toggle Lint
            </label>
            <input
              id="lintToggleBtn"
              title="Toogle linting - showing errors"
              type="checkbox"
            /> */}
            {/* <input type="range" name="code-font-size" id="code-font-size" /> */}
          </>
        }
      />
      <div
        className="box"
        id="menu"
        style={{
          display: "grid",
          grid: " 'linksArea . . . . toggleButtonsArea' ",
          justifyContent: "space-between",
          zIndex: "10",
          alignContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            rowGap: "10px",
            background: "var(--bg-light)",
            paddingTop: "15px",
            paddingBottom: "15px",
            gridArea: "linksArea",
            cursor: "default",
            alignContent: "center",
          }}
        >
          {items.map((obj) => (
            <Link key={obj.id} href={obj.url}>
              <span className="l hvrBtn">{obj.label}</span>
            </Link>
          ))}
        </div>
        <div
          className="toggleButtons"
          style={{
            gridArea: "toggleButtonsArea",
            display: "grid",
            alignContent: "center",
            gridAutoFlow: "column",
            placeItems: "baseline",
          }}
        >
          <label
            className="svgButton hvrBtn"
            htmlFor="fullScreenToggle"
            title="Toggle full-screen"
          >
            <input
              type="checkbox"
              name="fullscreen"
              id="fullScreenToggle"
              style={{ display: "none" }}
            />
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path d="M10 38V28.35H13V35H19.65V38ZM10 19.65V10H19.65V13H13V19.65ZM28.35 38V35H35V28.35H38V38ZM35 19.65V13H28.35V10H38V19.65Z" />
            </svg>
          </label>
          <label
            className="svgButton hvrBtn"
            htmlFor="saveBtn"
            title="Save code"
            style={{ transform: "scale(0.5, 0.59)" }}
          >
            <input
              type="button"
              name="saveBtn"
              id="saveBtn"
              style={{ display: "none" }}
            />
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path d="M42 13.85V39Q42 40.2 41.1 41.1Q40.2 42 39 42H9Q7.8 42 6.9 41.1Q6 40.2 6 39V9Q6 7.8 6.9 6.9Q7.8 6 9 6H34.15ZM39 15.2 32.8 9H9Q9 9 9 9Q9 9 9 9V39Q9 39 9 39Q9 39 9 39H39Q39 39 39 39Q39 39 39 39ZM24 35.75Q26.15 35.75 27.675 34.225Q29.2 32.7 29.2 30.55Q29.2 28.4 27.675 26.875Q26.15 25.35 24 25.35Q21.85 25.35 20.325 26.875Q18.8 28.4 18.8 30.55Q18.8 32.7 20.325 34.225Q21.85 35.75 24 35.75ZM11.65 18.8H29.55V11.65H11.65ZM9 15.2V39Q9 39 9 39Q9 39 9 39Q9 39 9 39Q9 39 9 39V9Q9 9 9 9Q9 9 9 9Z" />
            </svg>
          </label>
          <label
            className="svgButton hvrBtn"
            htmlFor="selectFile"
            title="Select a file from your device"
            style={{ position: "relative", bottom: "1.2px" }}
          >
            <input
              type="file"
              name="selectFile"
              id="selectFile"
              style={{ display: "none" }}
            />
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path d="M22.5 36.3H25.5V29.85H32V26.85H25.5V20.35H22.5V26.85H16V29.85H22.5ZM37 44H11Q9.8 44 8.9 43.1Q8 42.2 8 41V7Q8 5.8 8.9 4.9Q9.8 4 11 4H29.05L40 14.95V41Q40 42.2 39.1 43.1Q38.2 44 37 44ZM27.55 16.3V7H11Q11 7 11 7Q11 7 11 7V41Q11 41 11 41Q11 41 11 41H37Q37 41 37 41Q37 41 37 41V16.3ZM11 7V16.3V7V16.3V41Q11 41 11 41Q11 41 11 41Q11 41 11 41Q11 41 11 41V7Q11 7 11 7Q11 7 11 7Z" />
            </svg>
          </label>
          <label
            className="svgButton js-modal-trigger hvrBtn"
            htmlFor="settingsBtn"
            style={{ position: "relative", bottom: "3.2px" }}
            data-target="settingsModal"
            title="Settings"
          >
            <input
              type="button"
              name="settings"
              id="settingsBtn"
              style={{ display: "none" }}
            />
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path d="M37.65 17.8 35.45 13.1 30.75 10.9 35.45 8.7 37.65 4 39.85 8.7 44.55 10.9 39.85 13.1ZM41.85 32.25 40.35 29.1 37.2 27.6 40.35 26.1 41.85 22.95 43.35 26.1 46.5 27.6 43.35 29.1ZM15.7 44 15.2 39.4Q14.5 39.3 13.75 38.95Q13 38.6 12.45 38.1L8.55 39.75L4.15 32.55L7.95 30.05Q7.7 29.2 7.7 28.55Q7.7 27.9 7.95 27.05L4.15 24.55L8.55 17.35L12.45 19Q13 18.5 13.75 18.15Q14.5 17.8 15.2 17.7L15.7 13.1H24.1L24.6 17.7Q25.3 17.8 26.05 18.15Q26.8 18.5 27.35 19L31.25 17.35L35.65 24.55L31.85 27.05Q32.1 27.9 32.1 28.55Q32.1 29.2 31.85 30.05L35.65 32.55L31.25 39.75L27.35 38.1Q26.8 38.6 26.05 38.95Q25.3 39.3 24.6 39.4L24.1 44ZM19.9 34.3Q22.4 34.3 24.025 32.675Q25.65 31.05 25.65 28.55Q25.65 26.05 24.025 24.425Q22.4 22.8 19.9 22.8Q17.4 22.8 15.775 24.425Q14.15 26.05 14.15 28.55Q14.15 31.05 15.775 32.675Q17.4 34.3 19.9 34.3ZM19.9 31.3Q18.7 31.3 17.925 30.525Q17.15 29.75 17.15 28.55Q17.15 27.35 17.925 26.575Q18.7 25.8 19.9 25.8Q21.1 25.8 21.875 26.575Q22.65 27.35 22.65 28.55Q22.65 29.75 21.875 30.525Q21.1 31.3 19.9 31.3ZM18.2 41H21.6L22 37.2Q23.45 36.85 24.65 36.2Q25.85 35.55 26.85 34.5L30.1 35.95L31.75 33.35L28.65 31.15Q29.2 29.9 29.2 28.55Q29.2 27.2 28.65 25.95L31.75 23.75L30.1 21.15L26.85 22.6Q25.85 21.55 24.65 20.9Q23.45 20.25 22 19.9L21.6 16.1H18.2L17.8 19.9Q16.35 20.25 15.15 20.9Q13.95 21.55 12.95 22.6L9.7 21.15L8.05 23.75L11.15 25.95Q10.6 27.2 10.6 28.55Q10.6 29.9 11.15 31.15L8.05 33.35L9.7 35.95L12.95 34.5Q13.95 35.55 15.15 36.2Q16.35 36.85 17.8 37.2ZM19.9 28.55Q19.9 28.55 19.9 28.55Q19.9 28.55 19.9 28.55Q19.9 28.55 19.9 28.55Q19.9 28.55 19.9 28.55Q19.9 28.55 19.9 28.55Q19.9 28.55 19.9 28.55Q19.9 28.55 19.9 28.55Q19.9 28.55 19.9 28.55Q19.9 28.55 19.9 28.55Q19.9 28.55 19.9 28.55Q19.9 28.55 19.9 28.55Q19.9 28.55 19.9 28.55Z" />
            </svg>
          </label>
        </div>
      </div>
    </>
  );
}
