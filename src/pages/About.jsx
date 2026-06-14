import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-12">

        <h1 className="text-5xl font-bold mb-6">
          About PlantEasy
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          PlantEasy is an AI-assisted platform designed to help
          farmers, gardeners, and plant enthusiasts manage plant
          care more effectively through knowledge, reminders,
          and smart recommendations.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white rounded-3xl p-8 shadow-md">
            <h2 className="text-2xl font-bold mb-3">
              Our Mission
            </h2>

            <p className="text-gray-600">
              Bridge the gap between agriculture and technology
              through accessible digital tools.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-md">
            <h2 className="text-2xl font-bold mb-3">
              Why PlantEasy?
            </h2>

            <ul className="space-y-2 text-gray-600">
              <li>🌱 Easy to Use</li>
              <li>🤖 AI Assisted</li>
              <li>📚 Knowledge Driven</li>
              <li>🚜 Farmer Friendly</li>
            </ul>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}

export default About;