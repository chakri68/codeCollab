const logo = require("../public/logo.svg");
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
        gridTemplateColumns: "80px auto auto auto 100px",
      }}
      className="box"
      role="navigation"
      aria-label="main navigation"
    >
      <div
        className="logo"
        style={{
          gridArea: "logoImgArea",
          position: "relative",
          width: "64px",
          height: "64px",
          backgroundColor: "var(--link-primary)",
          borderRadius: "50%",
        }}
      >
        <Image src={logo} alt="heyo" layout="fill" objectFit="cover" />
      </div>
      <Link href="/">
        <span
          style={{
            gridArea: "logoTextArea",
            fontSize: "var(--title-size)",
          }}
          className="l"
        >
          codeCollab
        </span>
      </Link>

      <a
        href="https://liberapay.com/delta68/donate"
        target="_blank"
        rel="noreferrer"
        style={{
          gridArea: "donateArea",
        }}
      >
        <span className="button btn is-size-5">donate</span>
      </a>
      <p
        className="content is-size-6"
        style={{ gridArea: "contentArea", color: "var(--text-primary)" }}
      >
        a simple website for writing code. version 0.1.0 (
        <a
          href="https://github.com/chakri68/codeCollab"
          target="_blank"
          rel="noreferrer"
        >
          <span className="l">github link</span>
        </a>
        )
      </p>
    </nav>
  );
}
