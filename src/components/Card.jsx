function Card({ title, value, icon, color }) {
  return (
    <div
      className="p-4 rounded shadow-sm text-white"
      style={{
        background: color,
        flex: 1,
        minWidth: "200px",
      }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h6>{title}</h6>
          <h3 className="fw-bold">{value}</h3>
        </div>

        <div style={{ fontSize: "32px" }}>{icon}</div>
      </div>
    </div>
  );
}

export default Card;