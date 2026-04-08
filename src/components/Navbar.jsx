import { useState, useRef, useEffect } from "react";
import {
  FaHospital,
  FaBell,
  FaUserCircle,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar({ toggleSidebar }) {
  const [showNotif, setShowNotif] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const notifRef = useRef();
  const profileRef = useRef();
  const navigate = useNavigate();

  const notifications = [
    "🧑‍⚕️ New patient added",
    "📅 Appointment booked",
    "💊 Medicine low stock",
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setShowNotif(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar-custom">
      {/* LEFT */}
      <div className="nav-left">
        
        {/* ☰ Toggle (Mobile) */}
        <button className="menu-btn d-md-none" onClick={toggleSidebar}>
          ☰
        </button>

        <h4 className="logo">
          <FaHospital /> Hospital CRM
        </h4>

        {/* Notification */}
        <div className="notif-box" ref={notifRef}>
          <div
            className="icon-btn"
            onClick={() => {
              setShowNotif(!showNotif);
              setShowProfile(false);
            }}
          >
            <FaBell />
            <span className="notif-badge">{notifications.length}</span>
          </div>

          {showNotif && (
            <div className="notif-dropdown">
              <h6>Notifications</h6>
              {notifications.map((item, i) => (
                <div key={i} className="notif-item">{item}</div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* RIGHT */}
      <div className="profile-box" ref={profileRef}>
        <div
          className="profile-btn"
          onClick={() => {
            setShowProfile(!showProfile);
            setShowNotif(false);
          }}
        >
          <FaUserCircle size={28} />
          <span>Admin</span>
        </div>

        {showProfile && (
          <div className="profile-dropdown">
            <div onClick={() => navigate("/settings")}>
              <FaUser /> My Profile
            </div>

            <div
              className="text-danger"
              onClick={() => {
                alert("Logged out!");
                navigate("/");
              }}
            >
              <FaSignOutAlt /> Logout
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
