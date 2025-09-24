"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext"; 
import GoogleSignInButton from "../componenets/GoogleSignInButton";

export default function SignUp() {
  const router = useRouter();
  const { login } = useAuth(); 

  const handleSignUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login(); 
    router.push("/Details"); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center px-6">
      <div className="bg-white shadow-xl rounded-3xl p-10 max-w-md w-full">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-6">
          Create Your Account
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Full Name"
            className="px-4 py-3 rounded-xl border border-gray-300 
                       focus:outline-none focus:ring-2 focus:ring-green-400 
                       placeholder-gray-400 text-gray-800"
          />
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded-xl border border-gray-300 
                       focus:outline-none focus:ring-2 focus:ring-green-400 
                       placeholder-gray-400 text-gray-800"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-3 rounded-xl border border-gray-300 
                       focus:outline-none focus:ring-2 focus:ring-green-400 
                       placeholder-gray-400 text-gray-800"
          />

          <button
            type="submit"
            className="mt-4 px-6 py-3 bg-green-500 hover:bg-green-600 
                       text-white rounded-full font-semibold shadow-lg transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-gray-600 text-center">
          Already have an account?{" "}
          <a href="/Login" className="text-blue-600 hover:underline">
            Log In
          </a>

          <GoogleSignInButton />
        </p>
      </div>
    </div>
  );
}
