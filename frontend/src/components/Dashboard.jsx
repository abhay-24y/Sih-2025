import React from "react";
import AdminHeader from "./AdminHeader";
import AdminBody from "./AdminBody";
import AdminDashboardSection from "./AdminDashboardSection";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#050f20] text-white">
      <AdminHeader />
      <AdminBody />
      <AdminDashboardSection />
    </div>
  );
};

export default Dashboard;
