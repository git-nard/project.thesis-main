import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const SettingsLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 flex flex-col justify-between">
        <div>
          {/* ✅ Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-700 mb-6 hover:text-yellow-600 transition"
          >
            <span className="text-xl mr-2">←</span> Back
          </button>

          <div className="flex flex-col items-center mb-8">
            <img
              src={
                JSON.parse(localStorage.getItem("user") || "{}")?.profileImage ||
                "https://via.placeholder.com/80"
              }
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover mb-3 border"
            />
            <h2 className="text-lg font-semibold text-gray-800">
              {JSON.parse(localStorage.getItem("user") || "{}")?.name ||
                "Guest User"}
            </h2>
            <p className="text-sm text-gray-500">
              {JSON.parse(localStorage.getItem("user") || "{}")?.email || ""}
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-3">
            <NavLink
              to="/settings/account"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md font-medium transition ${
                  isActive
                    ? "bg-yellow-400 text-black"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              Account Settings
            </NavLink>

            <NavLink
              to="/settings/personal"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md font-medium transition ${
                  isActive
                    ? "bg-yellow-400 text-black"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              Personal Information
            </NavLink>

            <NavLink
              to="/settings/privacy"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md font-medium transition ${
                  isActive
                    ? "bg-yellow-400 text-black"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              Privacy
            </NavLink>
          </nav>
        </div>

        <div className="text-center text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} TravelEase
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default SettingsLayout;
