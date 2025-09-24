"use client";

import Link from "next/link";
import Nav from "../componenets/Navbar1";

export default function UserForm() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white relative">
      <div className="fixed top-0 left-0 w-full z-50">
        <Nav />
      </div>

      <div className="flex flex-col items-center justify-center px-6 py-12 pt-28">
        <div className="bg-white shadow-xl rounded-3xl p-10 max-w-lg w-full">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-6">
            User Information Form
          </h2>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400 text-gray-800"
            />

            <input
              type="number"
              placeholder="Age"
              className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400 text-gray-800"
            />

            <select className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-800">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <input
              type="date"
              className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-800"
            />

            <input
              type="number"
              placeholder="Height (cm)"
              className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400 text-gray-800"
            />

            <input
              type="number"
              placeholder="Weight (kg)"
              className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400 text-gray-800"
            />

            <input
              type="text"
              placeholder="City"
              className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400 text-gray-800"
            />

            <input
              type="text"
              placeholder="State"
              className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400 text-gray-800"
            />

            <textarea
              placeholder="Medical History (optional)"
              className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400 text-gray-800"
              rows={4}
            />

            <textarea
              placeholder="Additional health info (optional)"
              className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400 text-gray-800"
              rows={4}
            />

          </form>
        </div>
      </div>
    </div>
  );
}
