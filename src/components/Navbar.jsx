import { Link } from "react-router-dom";
import logoIcon from "../assets/logo-icon.png";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-green-100 dark:border-gray-700">
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <img
            src={logoIcon}
            alt="PlantEasy Logo"
            className="h-9 w-9 md:h-10 md:w-10"
          />

          <span className="text-xl md:text-2xl font-bold text-green-700 dark:text-green-400">
            PlantEasy
          </span>
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 rounded-xl bg-green-100 dark:bg-gray-700 flex items-center justify-center text-xl"
          >
            ☰
          </button>

          <div className="w-10 h-10 bg-green-100 dark:bg-gray-700 rounded-full flex items-center justify-center cursor-pointer">
            👤
          </div>

        </div>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-full right-4 mt-2 w-56 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block px-5 py-3 hover:bg-green-50 dark:hover:bg-gray-700 dark:text-white"
            >
              🏠 Home
            </Link>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="block px-5 py-3 hover:bg-green-50 dark:hover:bg-gray-700 dark:text-white"
            >
              ℹ️ About
            </Link>

            <Link
              to="/dashboard"
              onClick={() => setMenuOpen(false)}
              className="block px-5 py-3 hover:bg-green-50 dark:hover:bg-gray-700 dark:text-white"
            >
              📊 Dashboard
            </Link>

            <Link
              to="/assistant"
              onClick={() => setMenuOpen(false)}
              className="block px-5 py-3 hover:bg-green-50 dark:hover:bg-gray-700 dark:text-white"
            >
              🤖 AI Assistant
            </Link>

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="block px-5 py-3 hover:bg-green-50 dark:hover:bg-gray-700 dark:text-white"
            >
              🔐 Login
            </Link>

          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;