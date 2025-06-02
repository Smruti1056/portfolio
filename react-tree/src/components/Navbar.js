import React from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { title: "Home", path: "/" },
  { title: "Experience", path: "/experience" },
  { title: "Projects", path: "/projects" },
  { title: "Certifications", path: "/certifications" },
  { title: "Contact", path: "/contact" }
];

export default function Navbar({ dark, setDark }) {
  const location = useLocation();

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-gray-800 dark:bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="text-2xl font-bold text-teal-400">Smruti Ranjan Dash</div>
      <div className="flex items-center space-x-6">
        {navItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`hover:text-teal-400 transition ${
              location.pathname === item.path ? "text-teal-300 font-bold" : "text-gray-300"
            }`}
          >
            {item.title}
          </Link>
        ))}
        <button
          className="ml-4 p-2 rounded bg-gray-700 text-white"
          onClick={() => setDark(d => !d)}
          aria-label="Toggle dark mode"
        >
          {dark ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}