import { Link } from "react-router-dom";
import logoIcon from "../assets/logo-icon.png";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 flex-shrink-0"
        >
          <img
            src={logoIcon}
            alt="PlantEasy Logo"
            className="h-9 w-9 md:h-10 md:w-10"
          />

          <span className="text-xl md:text-2xl font-bold text-green-700 whitespace-nowrap">
            PlantEasy
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">

          <Link
            to="/"
            className="text-gray-700 hover:text-green-600 transition font-medium"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-gray-700 hover:text-green-600 transition font-medium"
          >
            About
          </Link>

          <Link
            to="/dashboard"
            className="text-gray-700 hover:text-green-600 transition font-medium"
          >
            Dashboard
          </Link>

          <Link
            to="/login"
            className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition"
          >
            Login
          </Link>

        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center cursor-pointer">
          👤
        </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;