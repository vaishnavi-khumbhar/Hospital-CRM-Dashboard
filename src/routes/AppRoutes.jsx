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
        
        {/* 🔥 FIX: Redirect root */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        {/* WITH Layout */}
        <Route path="/dashboard" element={<Layout><PageWrapper><Dashboard /></PageWrapper></Layout>} />
        <Route path="/patients" element={<Layout><PageWrapper><Patients /></PageWrapper></Layout>} />
        <Route path="/patient/:id" element={<Layout><PageWrapper><PatientDetails /></PageWrapper></Layout>} />
        <Route path="/doctors" element={<Layout><PageWrapper><Doctors /></PageWrapper></Layout>} />
        <Route path="/appointments" element={<Layout><PageWrapper><Appointments /></PageWrapper></Layout>} />
        <Route path="/billing" element={<Layout><PageWrapper><Billing /></PageWrapper></Layout>} />
        <Route path="/pharmacy" element={<Layout><PageWrapper><Pharmacy /></PageWrapper></Layout>} />
        <Route path="/reports" element={<Layout><PageWrapper><Reports /></PageWrapper></Layout>} />
        <Route path="/settings" element={<Layout><PageWrapper><Settings /></PageWrapper></Layout>} />

        {/* Optional fallback */}
        <Route path="*" element={<Navigate to="/dashboard" />} />

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
