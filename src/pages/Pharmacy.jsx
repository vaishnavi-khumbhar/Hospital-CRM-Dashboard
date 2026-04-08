import { useState } from "react";

function Pharmacy() {
  const [medicines, setMedicines] = useState([
    { id: 1, name: "Paracetamol", stock: 50 },
    { id: 2, name: "Crocin", stock: 10 },
    { id: 3, name: "Aspirin", stock: 5 },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    stock: "",
  });

  // ➕ Add / Update
  const handleSave = () => {
    if (!form.name || !form.stock) {
      alert("Fill all fields");
      return;
    }

    if (editId) {
      const updated = medicines.map((m) =>
        m.id === editId ? { ...form, id: editId } : m
      );
      setMedicines(updated);
      setEditId(null);
    } else {
      setMedicines([
        ...medicines,
        { ...form, id: Date.now() },
      ]);
    }

    setForm({ name: "", stock: "" });
    setShowForm(false);
  };

  // ✏ Edit
  const handleEdit = (med) => {
    setForm(med);
    setEditId(med.id);
    setShowForm(true);
  };

  // 🗑 Delete
  const handleDelete = (id) => {
    if (window.confirm("Delete medicine?")) {
      setMedicines(medicines.filter((m) => m.id !== id));
    }
  };

  return (
    <>
      

      <div className="d-flex">
        

        <div className="p-4 w-100">
          {/* Header */}
          <div className="d-flex justify-content-between mb-3">
            <h2 className="fw-bold">Pharmacy</h2>

            <button
              className="btn btn-primary"
              onClick={() => {
                setShowForm(!showForm);
                setEditId(null);
              }}
            >
              + Add Medicine
            </button>
          </div>

          {/* ➕ Form */}
          {showForm && (
            <div className="card p-3 mb-3 shadow">
              <div className="row g-2">
                <div className="col-md-5">
                  <input
                    placeholder="Medicine Name"
                    className="form-control"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                  />
                </div>

                <div className="col-md-4">
                  <input
                    type="number"
                    placeholder="Stock"
                    className="form-control"
                    value={form.stock}
                    onChange={(e) =>
                      setForm({ ...form, stock: e.target.value })
                    }
                  />
                </div>

                <div className="col-md-3">
                  <button
                    className="btn btn-success w-100"
                    onClick={handleSave}
                  >
                    {editId ? "Update" : "Add"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 💊 Medicines List */}
          <div className="row g-3">
            {medicines.map((med) => (
              <div key={med.id} className="col-md-3">
                <div className="card pharmacy-card p-3 shadow text-center">
                  <h5 className="fw-bold">{med.name}</h5>

                  <p className="mb-2">
                    Stock: <strong>{med.stock}</strong>
                  </p>

                  {/* ⚠ Low stock */}
                  {med.stock <= 10 && (
                    <span className="badge bg-danger mb-2">
                      Low Stock ⚠
                    </span>
                  )}

                  {/* Actions */}
                  <div className="d-flex justify-content-center gap-2 mt-2">
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() => handleEdit(med)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(med.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Pharmacy;