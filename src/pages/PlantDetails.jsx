import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PlantDetails() {
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
              Basil Plant
            </h1>

            <p className="text-gray-600 dark:text-gray-300 mb-8">
              A popular aromatic herb commonly used in cooking and easy to grow in gardens and containers.
            </p>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-green-50 dark:bg-green-900/30 rounded-2xl p-5">
                <h3 className="font-bold mb-2">💧 Watering</h3>
                <p>Keep soil moist but not waterlogged.</p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/30 rounded-2xl p-5">
                <h3 className="font-bold mb-2">☀️ Sunlight</h3>
                <p>Requires 6–8 hours of sunlight daily.</p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-2xl p-5">
                <h3 className="font-bold mb-2">🌱 Soil</h3>
                <p>Rich, well-draining soil is ideal.</p>
              </div>

            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Plant Information
              </h2>

              <p className="text-gray-600 dark:text-gray-300">
                Basil grows best in warm environments and should be watered regularly.
                It is widely used in culinary dishes and can be grown indoors or outdoors.
              </p>
            </div>

          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}

export default PlantDetails;