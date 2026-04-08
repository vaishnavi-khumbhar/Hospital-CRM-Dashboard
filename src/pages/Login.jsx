import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "admin",
  });

  //  Strong Password Regex
  const strongPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  //  Validation
  const validate = () => {
    if (!form.email) {
      Swal.fire("Error", "Email is required!", "warning");
      return false;
    }

    if (!form.email.includes("@")) {
      Swal.fire("Invalid Email", "Enter valid email!", "warning");
      return false;
    }

    if (!form.password) {
      Swal.fire("Error", "Password is required!", "warning");
      return false;
    }

    if (!strongPassword.test(form.password)) {
      Swal.fire({
        icon: "warning",
        title: "Weak Password",
        html: `
          Password must include:
          <br>• 8+ characters
          <br>• Uppercase letter
          <br>• Lowercase letter
          <br>• Number
          <br>• Special character
        `,
      });
      return false;
    }

    return true;
  };

  //  Login
  const handleLogin = (e) => {
    e.preventDefault();

    if (!validate()) return;

    localStorage.setItem("auth", true);

    Swal.fire({
      icon: "success",
      title: "Login Successful 🎉",
      timer: 1500,
      showConfirmButton: false,
    });

    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="login-bg d-flex justify-content-center align-items-center vh-100">
      <div className="login-card p-4 shadow-lg">
        <h2 className="text-center mb-4 fw-bold text-white">
           Hospital Login
        </h2>

        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="mb-3 position-relative">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control input-field"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
          </div>

          {/* Password */}
          <div className="mb-3 position-relative">
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control input-field"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />
          </div>

          {/* Role */}
          <div className="mb-3 position-relative">
            <FaUserShield className="input-icon" />
            <select
              className="form-control input-field"
              value={form.role}
              onChange={(e) =>
                setForm({ ...form, role: e.target.value })
              }
            >
              <option value="admin">Admin</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>

          <button className="btn btn-login w-100 mt-2">
            Login
          </button>

          <p className="text-center mt-3 text-light">
            Secure Hospital CRM Access
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;