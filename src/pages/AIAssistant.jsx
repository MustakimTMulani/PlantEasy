import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AIAssistant() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-12">

        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            🌱 Ask PlantEasy
          </h1>

          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get guidance on plant care, watering schedules,
            sunlight requirements, diseases, and growing tips.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6">

          <div className="h-[450px] overflow-y-auto border border-gray-200 dark:border-gray-700 rounded-2xl p-6 mb-6">

            <div className="mb-4">
              <div className="inline-block bg-green-100 dark:bg-green-900/40 px-4 py-3 rounded-2xl">
                🌿 How often should I water basil?
              </div>
            </div>

            <div className="flex justify-end">
              <div className="inline-block bg-green-600 text-white px-4 py-3 rounded-2xl max-w-md">
                Basil typically prefers moist soil. Water when the top inch of soil feels dry.
              </div>
            </div>

          </div>

          <div className="flex gap-4">

            <input
              type="text"
              placeholder="Ask PlantEasy about your plants..."
              className="flex-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-2xl px-4 py-3"
            />

            <button className="bg-green-600 text-white px-6 py-3 rounded-2xl hover:bg-green-700 transition">
              Send
            </button>

          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}

export default AIAssistant;