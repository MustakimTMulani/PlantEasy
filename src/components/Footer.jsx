import { Link } from "react-router-dom";
import logoIcon from "../assets/logo-icon.png";

function Footer() {
  return (
    <footer className="bg-green-950 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-2 gap-10">

          <div>
            <div className="flex items-center gap-3 mb-4">
            <img
              src={logoIcon}
              alt="PlantEasy"
              className="h-10 w-10"
            />

            <h2 className="text-3xl font-bold">
              PlantEasy
            </h2>
          </div>

            <p className="text-green-200 max-w-md">
              Helping farmers, gardeners, and plant enthusiasts
              grow smarter through technology, knowledge,
              and AI-powered assistance.
            </p>
          </div>

          <div>
          <h3 className="font-semibold mb-4">
            Quick Links
          </h3>

          <div className="flex flex-col gap-2 text-green-200 mb-6">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/login">Login</Link>
          </div>

          <h3 className="font-semibold mb-3">
            Connect
          </h3>

          <div className="flex gap-4 text-2xl">
            <span title="Email">📧</span>
            <span title="LinkedIn">💼</span>
            <span title="GitHub">🐙</span>
          </div>
        </div>

        </div>

        <div className="border-t border-green-900 mt-10 pt-6 text-green-300 text-sm">
          Built with React, FastAPI & Gemini AI • © 2026 PlantEasy
        </div>

      </div>
    </footer>
  );
}

export default Footer;