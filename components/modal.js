export default function ModalPopUp({ id, options }) {
  return (
    <div className="modal" id={id}>
      <div className="modal-background" />
      <div className="modal-card" style={{ background: "var(--bg-dark)" }}>
        <header className="modal-card-head">
          <p className="modal-card-title">Settings</p>
          <button className="delete" aria-label="close"></button>
        </header>
        <section
          className="modal-card-body"
          style={{
            display: "grid",
            gridTemplateColumns: "auto 100px",
            justifyContent: "space-around",
            justifyItems: "stretch",
            alignItems: "center",
            rowGap: "10px",
          }}
        >
          {options}
        </section>
        {/* <footer className="modal-card-foot">
          <button className="btn button">Save changes</button>
          <button className="button btn-white">Cancel</button>
        </footer> */}
      </div>
    </div>
  );
}
