import { useState } from "react";

function Doctors() {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Dr. Mehta",
      specialization: "Cardiologist",
      status: "Available",
    },
    {
      id: 2,
      name: "Dr. Singh",
      specialization: "Neurologist",
      status: "Busy",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [newDoctor, setNewDoctor] = useState({
    name: "",
    specialization: "",
    status: "Available",
  });

  // ➕ Add / ✏ Update
  const handleSave = () => {
    if (!newDoctor.name || !newDoctor.specialization) {
      alert("Fill all fields");
      return;
    }

    if (editId) {
      const updated = doctors.map((d) =>
        d.id === editId ? { ...newDoctor, id: editId } : d
      );
      setDoctors(updated);
      setEditId(null);
    } else {
      setDoctors([...doctors, { ...newDoctor, id: Date.now() }]);
    }

    setNewDoctor({
      name: "",
      specialization: "",
      status: "Available",
    });

    setShowForm(false);
  };

  // ✏ Edit
  const handleEdit = (doc) => {
    setNewDoctor(doc);
    setEditId(doc.id);
    setShowForm(true);
  };

  // 🗑 Delete
  const handleDelete = (id) => {
    if (window.confirm("Delete this doctor?")) {
      setDoctors(doctors.filter((d) => d.id !== id));
    }
  };

  return (
    <>
     

      <div className="d-flex">
        

        <div className="p-4 w-100">
          {/* Header */}
          <div className="d-flex justify-content-between mb-3">
            <h2 className="fw-bold">Doctors</h2>

            <button
              className="btn btn-primary"
              onClick={() => {
                setShowForm(!showForm);
                setEditId(null);
              }}
            >
              + Add Doctor
            </button>
          </div>

          {/* ➕ Form */}
          {showForm && (
            <div className="card p-3 mb-3 shadow">
              <div className="row g-2">
                <div className="col-md-4">
                  <input
                    placeholder="Doctor Name"
                    className="form-control"
                    value={newDoctor.name}
                    onChange={(e) =>
                      setNewDoctor({ ...newDoctor, name: e.target.value })
                    }
                  />
                </div>

                <div className="col-md-4">
                  <input
                    placeholder="Specialization"
                    className="form-control"
                    value={newDoctor.specialization}
                    onChange={(e) =>
                      setNewDoctor({
                        ...newDoctor,
                        specialization: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="col-md-3">
                  <select
                    className="form-select"
                    value={newDoctor.status}
                    onChange={(e) =>
                      setNewDoctor({ ...newDoctor, status: e.target.value })
                    }
                  >
                    <option>Available</option>
                    <option>Busy</option>
                  </select>
                </div>

                <div className="col-md-1">
                  <button
                    className="btn btn-success w-100"
                    onClick={handleSave}
                  >
                    {editId ? "✔" : "+"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 👨‍⚕️ Doctors Cards */}
          <div className="row g-3">
            {doctors.map((doc) => (
              <div key={doc.id} className="col-md-3">
                <div className="card doctor-card p-3 text-center shadow">
                  <h5 className="fw-bold">{doc.name}</h5>
                  <p className="text-muted">{doc.specialization}</p>

                  {/* Status */}
                  <span
                    className={`badge ${
                      doc.status === "Available"
                        ? "bg-success"
                        : "bg-danger"
                    }`}
                  >
                    {doc.status}
                  </span>

                  {/* Actions */}
                  <div className="d-flex justify-content-center gap-2 mt-3">
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() => handleEdit(doc)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(doc.id)}
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

export default Doctors;