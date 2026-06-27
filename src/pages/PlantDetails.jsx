import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Loader from "../components/ui/Loader";
import Toast from "../components/ui/Toast";

import { getPlant } from "../services/api";

function PlantDetails() {
  const { id } = useParams();

  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    async function loadPlant() {
      try {
        const data = await getPlant(id);
        setPlant(data);
      } catch (error) {
        console.error(error);
        setToastMessage("Failed to load plant.");
        setShowToast(true);
      } finally {
        setLoading(false);
      }
    }

    loadPlant();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!plant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Plant not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-12">

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden">

          <div className="h-72 bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-8xl">
            🌿
          </div>

          <div className="p-8">

            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {plant.name}
            </h1>

            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Information loaded directly from the FastAPI backend.
            </p>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-green-50 dark:bg-green-900/30 rounded-2xl p-5">
                <h3 className="font-bold mb-2">💧 Watering</h3>
                <p>{plant.watering}</p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/30 rounded-2xl p-5">
                <h3 className="font-bold mb-2">☀️ Sunlight</h3>
                <p>{plant.sunlight}</p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-2xl p-5">
                <h3 className="font-bold mb-2">🌱 Soil</h3>
                <p>{plant.soil}</p>
              </div>

            </div>

          </div>

        </div>

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

export default PlantDetails;