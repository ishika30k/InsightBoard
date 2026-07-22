import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../Components/Layout";

import Dashboard from "../Pages/Dashboard";
import Customers from "../Pages/Customers";
import Projects from "../Pages/Projects";
import Analytics from "../Pages/Analytics";
import Profile from "../Pages/Profile";
import Login from "../Pages/Login";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login page without sidebar/navbar */}
        <Route path="/login" element={<Login />} />

        {/* Protected application layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;