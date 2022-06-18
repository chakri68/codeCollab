export default function ModalPopUp({
  id,
  className,
  titleJSX,
  prColor = "var(--link-primary)",
  settings = false,
  options,
}) {
  return (
    <div className={`modal appear ${className ? className : ""}`} id={id}>
      <div className="modal-background" />
      <div
        className="modal-card"
        style={{
          background: "var(--bg-light)",
          height: `${settings ? "60%" : "fit-content"}`,
          paddingBottom: "10px",
          borderRadius: "10px",
          maxWidth: "min(500px, calc(100% - 40px))",
        }}
      >
        <header className="modal-card-head" style={{ borderColor: prColor }}>
          <p className="modal-card-title modalTitle" style={{ color: prColor }}>
            {titleJSX}
          </p>
          <button className="delete" aria-label="close"></button>
        </header>
        <section
          className={`modal-card-body modalBody ${
            settings ? "" : "has-text-centered"
          }`}
          style={{
            overflow: "auto",
          }}
        >
          {settings ? (
            <section
              className="settingsList"
              style={{
                display: "grid",
                gridTemplateColumns: "auto 100px",
                justifyContent: "space-between",
                justifyItems: "stretch",
                flexDirection: "column",
                alignItems: "center",
                rowGap: "10px",
                height: "fit-content",
                padding: "0px 45px 20px 45px",
              }}
            >
              {options}
            </section>
          ) : (
            options
          )}
        </section>
        {/* <footer className="modal-card-foot">
          <button className="btn button">Save changes</button>
          <button className="button btn-white">Cancel</button>
        </footer> */}
      </div>
    </div>
  );
}
