import { useState } from "react";
import Table from "../components/Table";

function Patients() {
  const columns = [
    "Name",
    "Age",
    "Gender",
    "Contact",
    "Disease",
    "Actions",
  ];

  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "Riya Sharma",
      age: 25,
      gender: "Female",
      contact: "9876543210",
      disease: "Fever",
    },
    {
      id: 2,
      name: "Amit Patel",
      age: 30,
      gender: "Male",
      contact: "9123456780",
      disease: "Diabetes",
    },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [newPatient, setNewPatient] = useState({
    name: "",
    age: "",
    gender: "Male",
    contact: "",
    disease: "",
  });

  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  // 🔍 Filter logic
  const filteredData = patients.filter((p) => {
    return (
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "All" || p.gender === filter)
    );
  });

  // ➕ Add or Update
  const handleSave = () => {
    if (!newPatient.name || !newPatient.age || !newPatient.contact) {
      alert("Fill all fields");
      return;
    }

    if (editId) {
      // Update
      const updated = patients.map((p) =>
        p.id === editId ? { ...newPatient, id: editId } : p
      );
      setPatients(updated);
      setEditId(null);
    } else {
      // Add
      setPatients([
        ...patients,
        { ...newPatient, id: Date.now() },
      ]);
    }

    setNewPatient({
      name: "",
      age: "",
      gender: "Male",
      contact: "",
      disease: "",
    });

    setShowForm(false);
  };

  // ✏ Edit
  const handleEdit = (patient) => {
    setNewPatient(patient);
    setEditId(patient.id);
    setShowForm(true);
  };

  // 🗑 Delete
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Delete this patient?");
    if (confirmDelete) {
      setPatients(patients.filter((p) => p.id !== id));
    }
  };

  // 👉 Prepare data for table with buttons
  const tableData = filteredData.map((p) => ({
    name: p.name,
    age: p.age,
    gender: p.gender,
    contact: p.contact,
    disease: p.disease,
    actions: (
      <div className="d-flex gap-2">
        <button
          className="btn btn-sm btn-warning"
          onClick={() => handleEdit(p)}
        >
          Edit
        </button>

        <button
          className="btn btn-sm btn-danger"
          onClick={() => handleDelete(p.id)}
        >
          Delete
        </button>
      </div>
    ),
  }));

  return (
    <>
      

      <div className="d-flex">
       

        <div className="p-4 w-100">
          {/* Header */}
          <div className="d-flex justify-content-between mb-3">
            <h2>Patients</h2>
            <button
              className="btn btn-success"
              onClick={() => {
                setShowForm(!showForm);
                setEditId(null);
              }}
            >
              + Add Patient
            </button>
          </div>

          {/* ➕ Form */}
          {showForm && (
            <div className="card p-3 mb-3 shadow">
              <div className="row g-2">
                <div className="col-md-3">
                  <input
                    placeholder="Name"
                    className="form-control"
                    value={newPatient.name}
                    onChange={(e) =>
                      setNewPatient({ ...newPatient, name: e.target.value })
                    }
                  />
                </div>

                <div className="col-md-2">
                  <input
                    type="number"
                    placeholder="Age"
                    className="form-control"
                    value={newPatient.age}
                    onChange={(e) =>
                      setNewPatient({ ...newPatient, age: e.target.value })
                    }
                  />
                </div>

                <div className="col-md-2">
                  <select
                    className="form-select"
                    value={newPatient.gender}
                    onChange={(e) =>
                      setNewPatient({ ...newPatient, gender: e.target.value })
                    }
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>

                <div className="col-md-2">
                  <input
                    placeholder="Contact"
                    className="form-control"
                    value={newPatient.contact}
                    onChange={(e) =>
                      setNewPatient({ ...newPatient, contact: e.target.value })
                    }
                  />
                </div>

                <div className="col-md-2">
                  <input
                    placeholder="Disease"
                    className="form-control"
                    value={newPatient.disease}
                    onChange={(e) =>
                      setNewPatient({ ...newPatient, disease: e.target.value })
                    }
                  />
                </div>

                <div className="col-md-1">
                  <button
                    className="btn btn-primary w-100"
                    onClick={handleSave}
                  >
                    {editId ? "Update" : "Add"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 🔍 Search + Filter */}
          <div className="row mb-3">
            <div className="col-md-6">
              <input
                placeholder="Search..."
                className="form-control"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="col-md-3">
              <select
                className="form-select"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          {/* 📊 Table */}
          <div className="card p-3 shadow">
            <Table columns={columns} data={tableData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Patients;