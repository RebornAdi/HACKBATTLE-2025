"use client";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsFileBarGraphFill } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import Link from "next/link";

export default function LearnMore() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-6 py-16 flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-6">
          Learn More About{" "}
          <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            GoldenApple
          </span>
        </h1>

        <p className="text-lg text-gray-700 mb-12">
          GoldenApple is your personal healthcare companion, designed to help
          you understand how your environment and lifestyle affect your health.
          We bring together data, insights, and tools so you can make informed
          choices for a healthier life.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="p-6 bg-white shadow-md rounded-2xl">
            <div className="flex items-center gap-2 mb-2">
              <AiOutlineGlobal className="text-blue-400 text-2xl" />
              <h3 className="text-xl font-semibold text-blue-800">
                Environment Insights
              </h3>
            </div>
            <p className="text-gray-600">
              Get real-time updates on how your surroundings may impact your
              health and well-being.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-2xl">
            <div className="flex items-center gap-2 mb-2">
              <BsFileBarGraphFill className="text-green-400 text-2xl" />
              <h3 className="text-xl font-semibold text-blue-800">
                Health Tracking
              </h3>
            </div>
            <p className="text-gray-600">
              Track your health metrics like weight, activity, and medical
              history, all in one place.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-2xl">
            <div className="flex items-center gap-2 mb-2">
              <FaHandsHelping className="text-purple-500 text-2xl" />
              <h3 className="text-xl font-semibold text-blue-800">
                Personalized Support
              </h3>
            </div>
            <p className="text-gray-600">
              Get tailored recommendations based on your data to improve your
              lifestyle and habits.
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/Login">
            <button className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold text-lg shadow-lg transition">
              Get Started Today
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
