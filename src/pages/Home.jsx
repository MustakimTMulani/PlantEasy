import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-24">
        
        <div className="text-center mb-10">
        <h2 className="text-5xl font-bold mb-4 text-gray-900">
            Powerful Features
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage plants and crops efficiently.
        </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">

          <Card
            emoji="🌱"
            title="Plant Library"
            description="Browse detailed information about crops, plants, and cultivation."
            color="border-green-200"
            />

            <Card
            emoji="🩺"
            title="Plant Health"
            description="Identify diseases, symptoms, and preventive measures."
            color="border-blue-200"
            />

            <Card
            emoji="⏰"
            title="Smart Reminders"
            description="Track watering, fertilizing, and maintenance schedules."
            color="border-orange-200"
            />

        </div>
    
      </section>
    
    <Footer />

    </div>

  );
}

export default Home;