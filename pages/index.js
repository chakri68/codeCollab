import Header from "../components/header";
import Codearea from "../components/code";
import Menu from "../components/menu";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>codeEditor</title>
      </Head>
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
          { id: 3, name: "python", value: "python" },
          { id: 11, name: "C++", value: "cpp" },
          { id: 10, name: "Java", value: "java" },
          { id: 9, name: "C", value: "c" },
          { id: 6, name: "Javascript", value: "javascript" },
          { id: 4, name: "Rust", value: "rust" },
          { id: 7, name: "JSX", value: "jsx" },
          { id: 5, name: "Ruby", value: "ruby" },
          { id: 8, name: "CSS", value: "css" },
          { id: 2, name: "Shell", value: "shell" },
        ]}
      />
    </>
  );
}
