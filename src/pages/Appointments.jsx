import { useState } from "react";

function Appointments() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patient: "Riya Sharma",
      doctor: "Dr. Mehta",
      datetime: "2026-04-10 10:00",
      status: "Scheduled",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    patient: "",
    doctor: "",
    datetime: "",
    status: "Scheduled",
  });

  // ➕ Add / Update
  const handleSave = () => {
    if (!form.patient || !form.doctor || !form.datetime) {
      alert("Fill all fields");
      return;
    }

    if (editId) {
      const updated = appointments.map((a) =>
        a.id === editId ? { ...form, id: editId } : a
      );
      setAppointments(updated);
      setEditId(null);
    } else {
      setAppointments([
        ...appointments,
        { ...form, id: Date.now() },
      ]);
    }

    setForm({
      patient: "",
      doctor: "",
      datetime: "",
      status: "Scheduled",
    });

    setShowForm(false);
  };

  // ✏ Edit
  const handleEdit = (item) => {
    setForm(item);
    setEditId(item.id);
    setShowForm(true);
  };

  // 🗑 Delete
  const handleDelete = (id) => {
    if (window.confirm("Delete appointment?")) {
      setAppointments(appointments.filter((a) => a.id !== id));
    }
  };

  return (
    <>
    

      <div className="d-flex">
       

        <div className="p-4 w-100">
          {/* Header */}
          <div className="d-flex justify-content-between mb-3">
            <h2 className="fw-bold">Appointments</h2>

            <button
              className="btn btn-primary"
              onClick={() => {
                setShowForm(!showForm);
                setEditId(null);
              }}
            >
              + Book Appointment
            </button>
          </div>

          {/* ➕ Form */}
          {showForm && (
            <div className="card p-3 mb-3 shadow">
              <div className="row g-2">
                <div className="col-md-3">
                  <input
                    placeholder="Patient Name"
                    className="form-control"
                    value={form.patient}
                    onChange={(e) =>
                      setForm({ ...form, patient: e.target.value })
                    }
                  />
                </div>

                <div className="col-md-3">
                  <input
                    placeholder="Doctor Name"
                    className="form-control"
                    value={form.doctor}
                    onChange={(e) =>
                      setForm({ ...form, doctor: e.target.value })
                    }
                  />
                </div>

                <div className="col-md-3">
                  <input
                    type="datetime-local"
                    className="form-control"
                    value={form.datetime}
                    onChange={(e) =>
                      setForm({ ...form, datetime: e.target.value })
                    }
                  />
                </div>

                <div className="col-md-2">
                  <select
                    className="form-select"
                    value={form.status}
                    onChange={(e) =>
                      setForm({ ...form, status: e.target.value })
                    }
                  >
                    <option>Scheduled</option>
                    <option>Completed</option>
                    <option>Cancelled</option>
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

          {/* 📋 Appointment Cards */}
          <div className="row g-3">
            {appointments.map((a) => (
              <div key={a.id} className="col-md-4">
                <div className="card appointment-card p-3 shadow">
                  <h5 className="fw-bold">{a.patient}</h5>
                  <p className="mb-1">👨‍⚕️ {a.doctor}</p>
                  <p className="mb-1">🕒 {a.datetime}</p>

                  {/* Status */}
                  <span
                    className={`badge ${
                      a.status === "Scheduled"
                        ? "bg-primary"
                        : a.status === "Completed"
                        ? "bg-success"
                        : "bg-danger"
                    }`}
                  >
                    {a.status}
                  </span>

                  {/* Actions */}
                  <div className="d-flex gap-2 mt-3">
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() => handleEdit(a)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(a.id)}
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

export default Appointments;