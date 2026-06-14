import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-green-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link
          to="/"
          className="text-2xl font-bold text-green-700 flex items-center gap-2"
        >
          🌱 PlantEasy
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-green-600 transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-gray-700 hover:text-green-600 transition"
          >
            About
          </Link>

          <Link
            to="/dashboard"
            className="text-gray-700 hover:text-green-600 transition"
          >
            Dashboard
          </Link>

          <Link
            to="/login"
            className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;