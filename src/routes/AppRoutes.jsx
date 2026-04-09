import { HashRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Layout from "../components/Layout";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Patients from "../pages/Patients";
import Doctors from "../pages/Doctors";
import Appointments from "../pages/Appointments";
import Billing from "../pages/Billing";
import Pharmacy from "../pages/Pharmacy";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";
import PatientDetails from "../pages/PatientDetails";


// ✅ Protected Route
const ProtectedRoute = ({ children }) => {
  const isAuth = localStorage.getItem("auth") === "true";
  return isAuth ? children : <Navigate to="/" />;
};


// ✅ Animation Wrapper
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}


function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        {/* ✅ LOGIN PAGE */}
        <Route path="/" element={<Login />} />

        {/* ✅ PROTECTED ROUTES */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout><PageWrapper><Dashboard /></PageWrapper></Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/patients"
          element={
            <ProtectedRoute>
              <Layout><PageWrapper><Patients /></PageWrapper></Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/patient/:id"
          element={
            <ProtectedRoute>
              <Layout><PageWrapper><PatientDetails /></PageWrapper></Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/doctors"
          element={
            <ProtectedRoute>
              <Layout><PageWrapper><Doctors /></PageWrapper></Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/appointments"
          element={
            <ProtectedRoute>
              <Layout><PageWrapper><Appointments /></PageWrapper></Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/billing"
          element={
            <ProtectedRoute>
              <Layout><PageWrapper><Billing /></PageWrapper></Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/pharmacy"
          element={
            <ProtectedRoute>
              <Layout><PageWrapper><Pharmacy /></PageWrapper></Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <Layout><PageWrapper><Reports /></PageWrapper></Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Layout><PageWrapper><Settings /></PageWrapper></Layout>
            </ProtectedRoute>
          }
        />

        {/* ✅ FALLBACK */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </AnimatePresence>
  );
}


export default function AppRoutes() {
  return (
    <HashRouter>
      <AnimatedRoutes />
    </HashRouter>
  );
}