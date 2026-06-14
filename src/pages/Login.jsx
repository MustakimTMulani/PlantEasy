import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      <Navbar />

      <main className="flex items-center justify-center px-6 py-20">

        <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md">

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">
              Welcome Back
            </h1>

            <p className="text-gray-500">
              Sign in to continue to PlantEasy
            </p>
          </div>

          <div className="space-y-5">

            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition">
              Sign In
            </button>

          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}

export default Login;