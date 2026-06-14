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
        <div className="grid md:grid-cols-3 gap-6">

          <Card
            emoji="🌱"
            title="Plant Library"
            description="Browse crop and plant information."
          />

          <Card
            emoji="🩺"
            title="Plant Health"
            description="Learn about diseases and prevention."
          />

          <Card
            emoji="⏰"
            title="Care Reminders"
            description="Track watering and maintenance schedules."
          />

        </div>
      </section>
    </div>
  );
}

export default Home;