function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-green-100">
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center">

          <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🌱 AI-Assisted Plant Management Platform
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Grow Smarter.
            <br />
            <span className="text-green-600">
              Manage Plants Better.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            PlantEasy helps farmers, gardeners, and plant enthusiasts
            track plant care, access agricultural knowledge, receive
            smart reminders, and get AI-powered guidance.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button className="bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-green-700 transition">
              Get Started
            </button>

            <button className="border border-green-600 text-green-700 px-8 py-4 rounded-2xl font-semibold hover:bg-green-50 transition">
              Explore Features
            </button>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">

            <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-3xl font-bold text-green-600">500+</h3>
                <p className="text-gray-600">Plants & Crops</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-3xl font-bold text-green-600">24/7</h3>
                <p className="text-gray-600">AI Assistance</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-3xl font-bold text-green-600">100%</h3>
                <p className="text-gray-600">Digital Management</p>
            </div>

            </div>


          <div className="flex flex-wrap justify-center gap-4">

            <div className="bg-white shadow-md rounded-xl px-5 py-3">
              🌱 Plant Library
            </div>

            <div className="bg-white shadow-md rounded-xl px-5 py-3">
              🤖 AI Assistant
            </div>

            <div className="bg-white shadow-md rounded-xl px-5 py-3">
              ⏰ Smart Reminders
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;