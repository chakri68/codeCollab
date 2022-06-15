// const logo = require("../public/logo.svg");
// import Image from "next/image";
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
        rowGap: "10px",
        marginBottom: "1.5rem",
        // columnGap: "10px",
        gridTemplateColumns: "80px auto auto auto 100px",
      }}
      // className="box"
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
          // backgroundColor: "var(--link-primary)",
          // borderRadius: "50%",
          backgroundColor: "transparent",
        }}
      >
        {/* <Image
          src={logo}
          style={{ fill: "var(--text-primary)" }}
          alt="heyo"
          layout="fill"
          objectFit="cover"
        /> */}
        <svg
          style={{ fill: "var(--text-primary)" }}
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600.000000 1600.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,1600.000000) scale(0.100000,-0.100000)"
            stroke="none"
          >
            <path
              d="M5571 12019 c-112 -10 -178 -28 -248 -69 -108 -62 -236 -206 -287
-323 -54 -123 -51 108 -51 -3597 0 -3188 1 -3441 17 -3517 25 -124 84 -230
183 -329 92 -93 161 -135 271 -167 l79 -22 2240 0 c2210 0 2677 4 2765 25 94
23 171 71 265 165 97 96 140 166 171 280 27 97 32 657 33 3337 l1 2457 -252
248 c-139 136 -536 532 -883 879 -530 532 -635 633 -664 638 -52 9 -3534 4
-3640 -5z m3349 -327 l75 -7 6 -515 c8 -599 11 -633 87 -790 52 -108 187 -243
293 -293 133 -63 181 -67 761 -70 349 -1 520 -5 528 -13 7 -7 9 -819 8 -2725
l-3 -2714 -24 -53 c-31 -69 -117 -147 -186 -168 -88 -27 -551 -33 -2730 -33
-2265 0 -2184 -2 -2265 54 -87 60 -131 127 -150 226 -6 31 -11 1356 -12 3432
l-3 3382 27 58 c50 107 135 190 223 217 26 8 144 15 325 19 360 8 2939 2 3040
-7z m983 -794 c290 -288 527 -528 527 -534 0 -7 -6 -14 -12 -17 -28 -10 -843
11 -882 23 -96 30 -177 154 -195 300 -9 67 -9 458 -2 748 1 19 4 21 19 12 9
-5 254 -245 545 -532z"
            />
            <path
              d="M8430 8671 c-31 -8 -62 -64 -146 -261 -33 -80 -96 -226 -139 -325
-43 -99 -95 -220 -115 -270 -21 -49 -60 -142 -88 -205 -27 -63 -81 -189 -120
-280 -38 -91 -122 -284 -187 -430 -65 -146 -137 -312 -160 -370 -23 -58 -70
-169 -104 -248 -38 -88 -60 -150 -56 -162 15 -47 148 -130 211 -130 71 0 73 5
526 1060 160 371 333 772 385 890 53 118 115 265 138 325 24 61 55 136 69 168
33 74 35 136 4 164 -55 51 -166 88 -218 74z"
            />
            <path
              d="M8800 8352 c-24 -7 -90 -73 -121 -121 -30 -47 -36 -80 -19 -110 16
-31 336 -307 640 -551 178 -144 282 -239 275 -250 -3 -5 -34 -29 -69 -53 -125
-88 -763 -630 -815 -694 -36 -44 -40 -84 -13 -128 29 -47 109 -125 129 -125
60 1 139 57 488 346 152 125 332 271 479 390 150 120 255 239 256 290 0 34
-112 137 -515 475 -586 491 -662 547 -715 531z"
            />
            <path
              d="M7113 8325 c-108 -54 -1043 -831 -1118 -929 -33 -43 -32 -74 4 -124
37 -50 271 -254 617 -537 87 -71 179 -148 204 -171 151 -135 295 -234 352
-242 36 -4 42 -1 89 49 122 131 111 161 -128 361 -48 40 -122 102 -163 138
-139 119 -464 383 -535 433 -14 10 -25 24 -25 31 0 6 30 34 67 62 62 45 179
140 483 394 63 53 160 132 215 177 163 131 191 172 160 234 -33 62 -127 149
-163 149 -4 0 -31 -11 -59 -25z"
            />
          </g>
        </svg>
      </div>
      <Link href="/">
        <span
          style={{
            gridArea: "logoTextArea",
            fontSize: "var(--title-size)",
          }}
          className="l hvrBtn"
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
        <span className="button btn is-size-5 hvrBtn">donate</span>
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
          <span className="l hvrBtn">github link</span>
        </a>
        )
      </p>
    </nav>
  );
}
