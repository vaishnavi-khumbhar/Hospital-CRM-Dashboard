import { useState } from "react";

function Billing() {
  const [bills, setBills] = useState([]);

  const [form, setForm] = useState({
    patient: "",
    treatment: "",
    charges: "",
    status: "Pending",
  });

  // ➕ Generate Bill
  const handleGenerate = () => {
    if (!form.patient || !form.treatment || !form.charges) {
      alert("Fill all fields");
      return;
    }

    const newBill = {
      id: Date.now(),
      ...form,
      total: form.charges,
    };

    setBills([...bills, newBill]);

    setForm({
      patient: "",
      treatment: "",
      charges: "",
      status: "Pending",
    });
  };

  // 💳 Mark as Paid
  const markPaid = (id) => {
    const updated = bills.map((b) =>
      b.id === id ? { ...b, status: "Paid" } : b
    );
    setBills(updated);
  };

  return (
    <>
     

      <div className="d-flex">

        <div className="p-4 w-100">
          <h2 className="fw-bold mb-3">Billing</h2>

          {/* ➕ Bill Form */}
          <div className="card p-3 shadow mb-4">
            <h5 className="mb-3">Generate Bill</h5>

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
                  placeholder="Treatment"
                  className="form-control"
                  value={form.treatment}
                  onChange={(e) =>
                    setForm({ ...form, treatment: e.target.value })
                  }
                />
              </div>

              <div className="col-md-2">
                <input
                  type="number"
                  placeholder="Charges ₹"
                  className="form-control"
                  value={form.charges}
                  onChange={(e) =>
                    setForm({ ...form, charges: e.target.value })
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
                  <option>Pending</option>
                  <option>Paid</option>
                </select>
              </div>

              <div className="col-md-2">
                <button
                  className="btn btn-success w-100"
                  onClick={handleGenerate}
                >
                  Generate
                </button>
              </div>
            </div>
          </div>

          {/* 📋 Bills List */}
          <div className="row g-3">
            {bills.map((bill) => (
              <div key={bill.id} className="col-md-4">
                <div className="card billing-card p-3 shadow">
                  <h5>{bill.patient}</h5>
                  <p>💊 {bill.treatment}</p>
                  <p>💰 ₹{bill.total}</p>

                  {/* Status */}
                  <span
  className={`badge custom-badge ${
    bill.status === "Paid"
      ? "bg-success"
      : "bg-warning text-dark"
  }`}
>
  {bill.status}
</span>

                  {/* Action */}
                  {bill.status === "Pending" && (
                    <button
                      className="btn btn-primary mt-3"
                      onClick={() => markPaid(bill.id)}
                    >
                      Pay Now
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Billing;