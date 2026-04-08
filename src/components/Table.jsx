function Table({ columns, data }) {
  return (
    <div className="table-responsive shadow-sm rounded">
      <table className="table table-hover align-middle">
        <thead className="table-dark">
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length > 0 ? (
            data.map((row, i) => (
              <tr key={i}>
                {Object.values(row).map((val, idx) => (
                  <td key={idx}>{val}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="text-center">
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;