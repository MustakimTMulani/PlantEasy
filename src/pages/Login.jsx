import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="p-10">
        <h1 className="text-4xl font-bold mb-4">Login</h1>
        <p>
          Access your PlantEasy account.
        </p>
      </main>

      <Footer />
    </div>
  );
}

export default Login;