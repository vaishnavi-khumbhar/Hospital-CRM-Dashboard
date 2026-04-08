import { useState } from "react";

import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

import { Bar, Line, Pie } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  LineElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement
);

function Reports() {
  const [month, setMonth] = useState("April");

  // 📊 Daily Patients
  const patientData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Patients",
        data: [20, 35, 25, 40, 30, 45],
        borderColor: "#6366f1",
        backgroundColor: "#c7d2fe",
        tension: 0.4,
      },
    ],
  };

  // 💰 Revenue
  const revenueData = {
    labels: ["Week1", "Week2", "Week3", "Week4"],
    datasets: [
      {
        label: "Revenue ₹",
        data: [10000, 15000, 12000, 18000],
        backgroundColor: "#06b6d4",
      },
    ],
  };

  // 🏥 Department Stats
  const departmentData = {
    labels: ["Cardiology", "Neurology", "Orthopedic", "General"],
    datasets: [
      {
        data: [30, 20, 25, 25],
        backgroundColor: [
          "#6366f1",
          "#06b6d4",
          "#22c55e",
          "#f59e0b",
        ],
      },
    ],
  };

  return (
    <>
     

      <div className="d-flex">
      

        <div className="p-4 w-100">
          {/* Header */}
          <div className="d-flex justify-content-between mb-4">
            <h2 className="fw-bold">Reports & Analytics</h2>

            {/* 📅 Filter */}
            <select
              className="form-select w-auto"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            >
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
            </select>
          </div>

          {/* 📊 Charts */}
          <div className="row g-3">
            {/* Line Chart */}
            <div className="col-md-6">
              <div className="card p-3 shadow report-card">
                <h5>Daily Patients</h5>
                <Line data={patientData} />
              </div>
            </div>

            {/* Bar Chart */}
            <div className="col-md-6">
              <div className="card p-3 shadow report-card">
                <h5>Revenue</h5>
                <Bar data={revenueData} />
              </div>
            </div>

            {/* Pie Chart */}
            <div className="col-md-6">
              <div className="card p-3 shadow report-card">
                <h5>Department Stats</h5>
                <Pie data={departmentData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reports;