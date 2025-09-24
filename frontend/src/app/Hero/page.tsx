import Navbar from "../componenets/Navbar";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-6 relative">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen pt-28 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-blue-800">
          GoldenApple
        </h1>

        <p className="mt-6 text-lg md:text-2xl text-gray-700 max-w-2xl mx-auto">
          Empowering your health with real-time insights from your environment.
          Make informed choices for a healthier lifestyle.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4">
          <button className="px-8 py-4 bg-green-500 hover:bg-green-600 rounded-full font-semibold text-lg text-white transition shadow-lg">
            Get Started
          </button>
          <button className="px-8 py-4 bg-white hover:bg-gray-100 rounded-full font-semibold text-lg text-blue-700 border border-blue-300 transition shadow">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
