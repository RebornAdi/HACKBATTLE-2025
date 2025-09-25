"use client";

import { useState } from "react";
import Nav from "../componenets/Navbar1"; 

export default function Solutions() {
  const [mlOutput, setMlOutput] = useState(
    "Your ML model output will appear here..."
  );

  const handleGetSolution = () => {
    const simulatedOutput = `Predicted results from ML model:
1. Health Score: 85
2. Recommended Diet: Balanced diet with more vegetables
3. Exercise Plan: 30 mins cardio daily`;
    setMlOutput(simulatedOutput);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white relative">
      <div className="fixed top-0 left-0 w-full z-50">
        <Nav />
      </div>

      <div className="px-6 py-12 pt-28 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Solutions</h1>

        <div className="w-full max-w-3xl flex flex-col gap-4">
          <textarea
            readOnly
            value={mlOutput}
            rows={10}
            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-800 bg-white resize-none"
          />

        </div>
      </div>
    </div>
  );
}
