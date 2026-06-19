import logoIcon from "../assets/logo-icon.png";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div>

            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <img
                src={logoIcon}
                alt="PlantEasy"
                className="h-5 w-5"
              />
              Plant Care & Agricultural Knowledge Platform
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Grow Smarter.
              <br />
              <span className="text-green-600">
                Manage Plants Better.
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              PlantEasy helps farmers, gardeners, and plant enthusiasts
              access plant knowledge, manage care schedules, monitor plant
              health, and receive guidance for better growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-green-700 transition">
                Get Started
              </button>

              <button className="border border-green-600 text-green-700 px-8 py-4 rounded-2xl font-semibold hover:bg-green-50 transition">
                Explore Features
              </button>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="bg-white px-4 py-2 rounded-xl shadow-sm">
                🌱 Plant Library
              </div>

              <div className="bg-white px-4 py-2 rounded-xl shadow-sm">
                🩺 Plant Health
              </div>

              <div className="bg-white px-4 py-2 rounded-xl shadow-sm">
                ⏰ Care Reminders
              </div>

              <div className="bg-white px-4 py-2 rounded-xl shadow-sm">
                🤖 AI Guidance
              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-green-100">

              <div className="flex items-center gap-3 mb-6">
                <img
                  src={logoIcon}
                  alt="PlantEasy"
                  className="h-10 w-10"
                />

                <h3 className="text-2xl font-bold">
                  PlantEasy
                </h3>
              </div>

              <div className="space-y-4">

                <div className="flex justify-between p-4 bg-green-50 rounded-xl">
                  <span>Plant Library</span>
                  <strong>500+</strong>
                </div>

                <div className="flex justify-between p-4 bg-blue-50 rounded-xl">
                  <span>Health Resources</span>
                  <strong>120+</strong>
                </div>

                <div className="flex justify-between p-4 bg-orange-50 rounded-xl">
                  <span>Care Guides</span>
                  <strong>50+</strong>
                </div>

              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <p className="font-semibold mb-2">
                  Featured Services
                </p>

                <ul className="space-y-2 text-gray-600">
                  <li>🌱 Plant Information Library</li>
                  <li>🩺 Plant Health Knowledge Base</li>
                  <li>⏰ Care Reminder System</li>
                  <li>🤖 AI-Powered Plant Guidance</li>
                </ul>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;