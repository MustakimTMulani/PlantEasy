import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="p-10">
        <h1 className="text-4xl font-bold mb-4">About PlantEasy</h1>
        <p>
          PlantEasy helps farmers and plant enthusiasts access
          agricultural knowledge and plant care guidance.
        </p>
      </main>

      <Footer />
    </div>
  );
}

export default About;