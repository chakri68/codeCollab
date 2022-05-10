import Header from "./components/header";
import Codearea from "./components/code";
import Menu from "./components/menu";
// import Script from "next/script";

export default function Home() {
  return (
    <>
      {/* <Script type="text/javascript" src={cMJS} />
      <Script type="text/javascript" src={JSJS} /> */}
      <Header />
      <Menu
        items={[
          { id: 1, label: "home", url: "/" },
          { id: 2, label: "login", url: "/" },
          { id: 3, label: "github", url: "/" },
          { id: 4, label: "api", url: "/" },
          { id: 5, label: "changelog", url: "/" },
          { id: 6, label: "legal", url: "/" },
        ]}
      />
      <Codearea
        languages={[
          { id: 1, name: "plain text", value: "plainText" },
          { id: 2, name: "C/C++", value: "c" },
          { id: 3, name: "python", value: "python" },
          { id: 4, name: "Java", value: "java" },
          { id: 5, name: "Rust", value: "rust" },
        ]}
      />
    </>
  );
}
