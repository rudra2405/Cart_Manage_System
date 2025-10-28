import React from "react";
import AdminHeader from "./Components/Admin/AdminHeader";
import AdminSidebar from "./Components/Admin/AdminSidebar";
import Dashboard from "./Components/Admin/DashBoard";

export default function AdminLayout() {
  return (
    <>
      <div className="flex flex-col h-full min-h-screen">
        {/* Header */}
        <AdminHeader />

        {/* Sidebar + Main area */}
        <div className="flex flex-1">
          {/* Sidebar */}
          <div className="sticky top-[90px] h-[calc(100vh-90px)]">
            <AdminSidebar />
          </div>

          {/* Empty main area for now */}
          <main className="flex-1 overflow-auto bg-gray-100 p-6">
            <Dashboard />
          </main>
        </div>
      </div>
    </>
  );
}
