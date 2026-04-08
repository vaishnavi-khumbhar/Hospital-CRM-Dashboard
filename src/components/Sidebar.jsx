import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserInjured,
  FaUserMd,
  FaCalendarCheck,
  FaFileInvoiceDollar,
  FaCapsules,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

function Sidebar({ isOpen, toggleSidebar }) {
  const location = useLocation();

  const menu = [
    {
      section: "Main",
      items: [
        { name: "Dashboard", path: "/dashboard", icon: <FaTachometerAlt /> },
      ],
    },
    {
      section: "Management",
      items: [
        { name: "Patients", path: "/patients", icon: <FaUserInjured /> },
        { name: "Doctors", path: "/doctors", icon: <FaUserMd /> },
        { name: "Appointments", path: "/appointments", icon: <FaCalendarCheck /> },
      ],
    },
    {
      section: "Finance",
      items: [
        { name: "Billing", path: "/billing", icon: <FaFileInvoiceDollar /> },
        { name: "Pharmacy", path: "/pharmacy", icon: <FaCapsules /> },
      ],
    },
    {
      section: "Analytics",
      items: [
        { name: "Reports", path: "/reports", icon: <FaChartBar /> },
      ],
    },
    {
      section: "Settings",
      items: [
        { name: "Settings", path: "/settings", icon: <FaCog /> },
      ],
    },
  ];

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      
      {/* Logo */}
      <div className="sidebar-header">
        <h4 className="logo">🏥 HMS</h4>
      </div>

      {/* Menu */}
      <div className="sidebar-menu">
        {menu.map((group, index) => (
          <div key={index} className="menu-group">
            
            <p className="sidebar-section">{group.section}</p>

            {group.items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-decoration-none"
                onClick={toggleSidebar}
              >
                <div
                  className={`sidebar-item ${
                    location.pathname === item.path ? "active" : ""
                  }`}
                >
                  <span className="icon">{item.icon}</span>
                  <span className="item-text">{item.name}</span>
                </div>
              </Link>
            ))}

          </div>
        ))}
      </div>

    </div>
  );
}

export default Sidebar;
