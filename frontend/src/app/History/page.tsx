"use client";

import { useState, useEffect } from "react";
import Nav from "../componenets/Navbar1";

interface UserHistory {
  fullName: string;
  age: number;
  gender: string;
  dob: string;
  height: number;
  weight: number;
  city: string;
  state: string;
  medicalHistory?: string;
  additionalInfo?: string;
  date: string; 
}

export default function HistoryPage() {
  const [history, setHistory] = useState<UserHistory[]>([
    {
      fullName: "John Doe",
      age: 28,
      gender: "Male",
      dob: "1995-05-12",
      height: 175,
      weight: 70,
      city: "New York",
      state: "NY",
      medicalHistory: "Allergy to pollen",
      additionalInfo: "Occasional headaches",
      date: "2025-09-20T10:15:00Z",
    },
    {
      fullName: "John Doe",
      age: 28,
      gender: "Male",
      dob: "1995-05-12",
      height: 176,
      weight: 72,
      city: "New York",
      state: "NY",
      medicalHistory: "None",
      additionalInfo: "Feeling good",
      date: "2025-09-22T14:30:00Z",
    },
  ]);

  const sortedHistory = history.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white relative">
      <div className="fixed top-0 left-0 w-full z-50">
        <Nav />
      </div>

      <div className="pt-28 px-6 pb-12">
        <h1 className="text-3xl font-bold text-blue-800 text-center mb-8">
          Your History
        </h1>

        {sortedHistory.length === 0 ? (
          <p className="text-center text-gray-600">
            No previous records found.
          </p>
        ) : (
          <div className="flex flex-col gap-6">
            {sortedHistory.map((entry, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-6 border border-gray-200"
              >
                <h2 className="text-xl font-bold text-blue-800 mb-2">
                  {entry.fullName}
                </h2>
                <p className="text-sm text-gray-500 mb-2">
                  Submitted on: {new Date(entry.date).toLocaleString()}
                </p>
                <p>
                  <strong>Age:</strong> {entry.age} | <strong>Gender:</strong>{" "}
                  {entry.gender}
                </p>
                <p>
                  <strong>DOB:</strong> {entry.dob}
                </p>
                <p>
                  <strong>Height:</strong> {entry.height} cm |{" "}
                  <strong>Weight:</strong> {entry.weight} kg
                </p>
                <p>
                  <strong>Location:</strong> {entry.city}, {entry.state}
                </p>
                {entry.medicalHistory && (
                  <p>
                    <strong>Medical History:</strong> {entry.medicalHistory}
                  </p>
                )}
                {entry.additionalInfo && (
                  <p>
                    <strong>Additional Info:</strong> {entry.additionalInfo}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
