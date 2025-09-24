"use client";

import { useAuth } from "../../context/AuthContext";
import Navbar from "../componenets/Navbar";
import Nav from "../componenets/Navbar1"; 

export default function Hero() {
  const { isLoggedIn } = useAuth();

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-6 relative scroll-smooth">
      <div className="fixed top-0 left-0 w-full z-50">
        {isLoggedIn ? <Nav /> : <Navbar />}
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen pt-28 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          GoldenApple
        </h1>

        <p className="mt-6 text-lg md:text-2xl text-gray-700 max-w-2xl mx-auto">
          Empowering your health with real-time insights from your environment.
          Make informed choices for a healthier lifestyle.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4">
          <a href="/Login">
            <button className="px-8 py-4 bg-green-500 hover:bg-green-600 rounded-full font-semibold text-lg text-white transition shadow-lg">
              Get Started
            </button>
          </a>

          <a href="#about">
            <button className="px-8 py-4 bg-white hover:bg-gray-100 rounded-full font-semibold text-lg text-blue-700 border border-blue-300 transition shadow">
              Learn More
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
