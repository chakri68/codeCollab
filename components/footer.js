export default function Footer() {
  return (
    <div
      className="box"
      style={{ marginTop: "1.5rem", color: "var(--text-primary)" }}
    >
      <p>
        copyright &#169;{" "}
        <a
          className="l"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/delta68"
        >
          delta68
        </a>{" "}
        2022
      </p>
      <p>
        contact:{" "}
        <a
          className="l"
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/flyingdelta01"
        >
          twitter
        </a>
      </p>
    </div>
  );
}
