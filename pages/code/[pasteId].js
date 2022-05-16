import { useRouter } from "next/router";

export default function postCode() {
  const submitCode = async () => {
    const response = await fetch("/api/postCode", {
      method: "POST",
      body: JSON.stringify({
        title: "Trial#1",
        author: "delta68",
        language: "javascript",
        code: "console.log('Hello World')",
        date: Date.now(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    window.open(`/${data.id}`);
  };
  return <button onClick={submitCode}>click me</button>;
}
