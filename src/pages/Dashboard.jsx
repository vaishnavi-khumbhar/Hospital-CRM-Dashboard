import Card from "../components/Card";

import PatientChart from "../components/PatientChart";
import AppointmentChart from "../components/AppointmentChart";

import {
  FaUserInjured,
  FaUserMd,
  FaCalendarCheck,
  FaBed,
} from "react-icons/fa";

function Dashboard() {
  return (
    <>
      

      <div className="d-flex">
        

        <div className="p-4 w-100">
          {/* Title */}
          <h2 className="mb-4 fw-bold">Dashboard</h2>

          {/* 🔥 Cards Section */}
          <div className="row g-3 mb-4">
            <div className="col-md-3">
              <Card
                title="Total Patients"
                value="120"
                icon={<FaUserInjured />}
                color="linear-gradient(135deg, #6366f1, #8b5cf6)"
              />
            </div>

            <div className="col-md-3">
              <Card
                title="Total Doctors"
                value="25"
                icon={<FaUserMd />}
                color="linear-gradient(135deg, #06b6d4, #3b82f6)"
              />
            </div>

            <div className="col-md-3">
              <Card
                title="Appointments Today"
                value="45"
                icon={<FaCalendarCheck />}
                color="linear-gradient(135deg, #ef4444, #f97316)"
              />
            </div>

            <div className="col-md-3">
              <Card
                title="Available Beds"
                value="18"
                icon={<FaBed />}
                color="linear-gradient(135deg, #22c55e, #16a34a)"
              />
            </div>
          </div>

          {/* 📊 Charts Section */}
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <div className="card p-3 shadow-sm h-100">
                <h5 className="mb-3">Patient Growth</h5>
                <PatientChart />
              </div>
            </div>

            <div className="col-md-6">
              <div className="card p-3 shadow-sm h-100">
                <h5 className="mb-3">Appointment Trends</h5>
                <AppointmentChart />
              </div>
            </div>
          </div>

          {/* 📋 Recent Activity */}
          <div className="card p-3 shadow-sm">
            <h5 className="mb-3">Recent Activity</h5>

            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between">
                <span>🧑‍⚕️ New patient registered - Riya Sharma</span>
                <small className="text-muted">2 mins ago</small>
              </li>

              <li className="list-group-item d-flex justify-content-between">
                <span>📅 Appointment booked with Dr. Mehta</span>
                <small className="text-muted">10 mins ago</small>
              </li>

              <li className="list-group-item d-flex justify-content-between">
                <span>💊 Medicine stock updated</span>
                <small className="text-muted">30 mins ago</small>
              </li>

              <li className="list-group-item d-flex justify-content-between">
                <span>🏥 Bed allocated to Amit Patel</span>
                <small className="text-muted">1 hour ago</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;