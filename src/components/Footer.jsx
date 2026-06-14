import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-green-950 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-bold mb-4">
              🌱 PlantEasy
            </h2>

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

            <div className="flex flex-col gap-2 text-green-200">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/login">Login</Link>
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