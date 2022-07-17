export default function CodeDetails({ createdAt, expiresAt, author, code }) {
  let stats = {
    lines: `${code.split("\n").length}`,
    chars: `${code.split(" ").length}`,
    size: `${new Blob([code]).size}`,
  };
  return (
    <div className="box CodeData" style={{ marginTop: "1.5rem" }}>
      <p className="details" style={{ color: "var(--link-primary)" }}>
        Author: <span style={{ color: "var(--text-primary)" }}>{author}</span>
      </p>
      <p className="details" style={{ color: "var(--link-primary)" }}>
        Created at:{" "}
        <span style={{ color: "var(--text-primary)" }}>{createdAt}</span>
      </p>
      <p className="details" style={{ color: "var(--link-primary)" }}>
        Expires on:{" "}
        <span style={{ color: "var(--text-primary)" }}>{expiresAt}</span>
      </p>
      <p className="details" style={{ color: "var(--link-primary)" }}>
        Stats:{" "}
        <span style={{ color: "var(--text-primary)" }}>
          {stats.lines} {stats.lines == 1 ? "line" : "lines"}, {stats.chars}{" "}
          {stats.chars == 1 ? "word" : "words"}, {stats.size}b
        </span>
      </p>
    </div>
  );
}
