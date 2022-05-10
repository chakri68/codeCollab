const logo = require("../public/logo.png");
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav
      id="header"
      style={{
        display: "grid",
        background: "inherit",
        alignItems: "center",
        grid: "'logoImgArea logoTextArea . . donateArea' 'contentArea contentArea contentArea contentArea contentArea'",
        rowGap: "20px",
        columnGap: "10px",
      }}
      className="box"
      role="navigation"
      aria-label="main navigation"
    >
      <Image
        src={logo}
        alt="heyo"
        width="64px"
        height="64px"
        layout="fixed"
        style={{ gridArea: "logoImgArea", borderRadius: "50%" }}
      />
      <Link href="/">
        <span
          style={{
            gridArea: "logoTextArea",
            fontSize: "var(--title-size)",
          }}
          className="l"
        >
          codeEditor
        </span>
      </Link>

      <Link href="/">
        <span
          className="button btn is-size-5"
          style={{
            gridArea: "donateArea",
          }}
        >
          donate
        </span>
      </Link>
      <p
        className="content is-size-6"
        style={{ gridArea: "contentArea", color: "var(--text-primary)" }}
      >
        a simple website for writing code. version 0.1.0 (
        <Link href="/">
          <span className="l">github link</span>
        </Link>
        )
      </p>
    </nav>
  );
}
