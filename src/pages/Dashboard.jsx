import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="p-10">
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
        <p>
          Manage your plants, reminders, and cultivation records.
        </p>
      </main>

      <Footer />
    </div>
  );
}

export default Dashboard;