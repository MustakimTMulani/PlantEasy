import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />

      <Hero />

      <section className="max-w-6xl mx-auto px-6 py-12">
        
        <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-3">
            Powerful Features
        </h2>

        <p className="text-gray-600">
            Everything you need to manage plants and crops efficiently.
        </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">

          <Card
            emoji="🌱"
            title="Plant Library"
            description="Browse detailed information about crops, plants, growing conditions, and care requirements."
            />

            <Card
            emoji="🩺"
            title="Plant Health"
            description="Learn about common plant diseases, symptoms, prevention methods, and treatment guidance."
            />

            <Card
            emoji="⏰"
            title="Smart Reminders"
            description="Track watering, fertilizing, pruning, and maintenance schedules with ease."
            />

        </div>
      </section>
    </div>
  );
}

export default Home;