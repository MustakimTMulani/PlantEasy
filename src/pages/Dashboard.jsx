import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
    <Navbar />

    <main className="max-w-7xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Dashboard
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Monitor your plants, reminders, and activity.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-md">
            <h3 className="text-gray-500 dark:text-gray-300 mb-2">Total Plants</h3>
            <p className="text-4xl font-bold text-green-600">12</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-md">
            <h3 className="text-gray-500 dark:text-gray-300 mb-2">Active Reminders</h3>
            <p className="text-4xl font-bold text-blue-600">8</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-md">
            <h3 className="text-gray-500 dark:text-gray-300 mb-2">Health Records</h3>
            <p className="text-4xl font-bold text-orange-500">5</p>
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Recent Activity
            </h2>

            <div className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-700 dark:text-white rounded-xl">
                🌱 Added Tomato Plant
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-700 dark:text-white rounded-xl">
                🩺 Viewed Plant Health Guide
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-700 dark:text-white rounded-xl">
                ⏰ Reminder Created
            </div>
            </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Upcoming Tasks
            </h2>

            <div className="space-y-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/40 dark:text-white rounded-xl">
                💧 Water Rose Plant
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/40 dark:text-white rounded-xl">
                🌿 Fertilize Basil
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/40 dark:text-white rounded-xl">
                🍅 Check Tomato Growth
            </div>
            </div>
        </div>

            </div>

      </main>

      <Footer />
    </div>
  );
}

export default Dashboard;