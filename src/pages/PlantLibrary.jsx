import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getPlants } from "../services/api";
import Loader from "../components/ui/Loader";
import Toast from "../components/ui/Toast";
import { Link } from "react-router-dom";

function PlantLibrary() {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
 
  useEffect(() => {
    async function loadPlants() {
      try {
        const data = await getPlants();
        setPlants(data);
      } catch (error) {
        console.error(error);
        setToastMessage("Failed to load plants.");
        setShowToast(true);
      } finally {
        setLoading(false);
      }
    }

    loadPlants();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Plant Library
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mb-10">
          Plants loaded directly from the FastAPI backend.
        </p>

        {loading ? (
          <div className="flex justify-center py-10">
            <Loader />
            </div>
        ) : (


          <div className="grid md:grid-cols-3 gap-6">
            {plants.map((plant) => (
             <Link
                to={`/plants/${plant.id}`}
                key={plant.id}
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-md p-6 block hover:shadow-xl transition"
                >
                <h2 className="text-2xl font-bold text-green-600">
                  {plant.name}
                </h2>

                <p className="mt-4 dark:text-gray-300">
                  💧 {plant.watering}
                </p>

                <p className="dark:text-gray-300">
                  ☀️ {plant.sunlight}
                </p>

                <p className="dark:text-gray-300">
                  🌱 {plant.soil}
                </p>
              </Link>
            ))}
          </div>
        )}
      </main>
            <Toast
            message={toastMessage}
            isVisible={showToast}
            onClose={() => setShowToast(false)}
            />
      <Footer />
    </div>
  );
}

export default PlantLibrary;