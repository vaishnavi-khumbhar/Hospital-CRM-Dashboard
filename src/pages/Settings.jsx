import { useState } from "react";

function Settings() {
  const [profile, setProfile] = useState({
    name: "Admin",
    email: "admin@gmail.com",
  });

  const [password, setPassword] = useState({
    old: "",
    new: "",
  });

  const [hospital, setHospital] = useState({
    name: "City Hospital",
    address: "Pune, Maharashtra",
  });

  const [darkMode, setDarkMode] = useState(false);

  // Save handlers
  const handleSaveProfile = () => {
    alert("Profile Updated!");
  };

  const handleChangePassword = () => {
    if (!password.old || !password.new) {
      alert("Fill all fields");
      return;
    }
    alert("Password Changed!");
    setPassword({ old: "", new: "" });
  };

  const handleSaveHospital = () => {
    alert("Hospital Details Saved!");
  };

  return (
    <>
     

      <div className={`d-flex ${darkMode ? "dark-mode" : ""}`}>

        <div className="p-4 w-100">
          <h2 className="fw-bold mb-4">Settings</h2>

          <div className="row g-3">
            {/* 👤 Profile */}
            <div className="col-md-4">
              <div className="card p-3 shadow settings-card">
                <h5>Profile</h5>

                <input
                  className="form-control mb-2"
                  placeholder="Name"
                  value={profile.name}
                  onChange={(e) =>
                    setProfile({ ...profile, name: e.target.value })
                  }
                />

                <input
                  className="form-control mb-2"
                  placeholder="Email"
                  value={profile.email}
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                />

                <button
                  className="btn btn-primary w-100"
                  onClick={handleSaveProfile}
                >
                  Save Profile
                </button>
              </div>
            </div>

            {/* 🔒 Change Password */}
            <div className="col-md-4">
              <div className="card p-3 shadow settings-card">
                <h5>Change Password</h5>

                <input
                  type="password"
                  className="form-control mb-2"
                  placeholder="Old Password"
                  value={password.old}
                  onChange={(e) =>
                    setPassword({ ...password, old: e.target.value })
                  }
                />

                <input
                  type="password"
                  className="form-control mb-2"
                  placeholder="New Password"
                  value={password.new}
                  onChange={(e) =>
                    setPassword({ ...password, new: e.target.value })
                  }
                />

                <button
                  className="btn btn-warning w-100"
                  onClick={handleChangePassword}
                >
                  Update Password
                </button>
              </div>
            </div>

            {/* 🏥 Hospital Details */}
            <div className="col-md-4">
              <div className="card p-3 shadow settings-card">
                <h5>Hospital Details</h5>

                <input
                  className="form-control mb-2"
                  placeholder="Hospital Name"
                  value={hospital.name}
                  onChange={(e) =>
                    setHospital({ ...hospital, name: e.target.value })
                  }
                />

                <textarea
                  className="form-control mb-2"
                  placeholder="Address"
                  value={hospital.address}
                  onChange={(e) =>
                    setHospital({ ...hospital, address: e.target.value })
                  }
                />

                <button
                  className="btn btn-success w-100"
                  onClick={handleSaveHospital}
                >
                  Save Details
                </button>
              </div>
            </div>

            {/* 🌙 Theme Toggle */}
            <div className="col-md-4">
              <div className="card p-3 shadow settings-card text-center">
                <h5>Theme</h5>

                <button
                  className="btn btn-dark w-100"
                  onClick={() => setDarkMode(!darkMode)}
                >
                  {darkMode ? "Light Mode ☀" : "Dark Mode 🌙"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;