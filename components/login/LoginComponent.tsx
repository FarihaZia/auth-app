"use client"; //important for session components

import { signIn } from "next-auth/react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function SignInPage() {
  const [message, setMessage] = useState("");

  const handleSignIn = async () => {
    try {
      await signIn("github");
      setMessage("Signing in with GitHub...");
    } catch (err) {
      console.error("Sign in error:", err);
      setMessage("Error signing in. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-slate-800 via-slate-500 to-slate-300">
        <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-lg animation-fade-in">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">Sign In</h1>
      <button
        onClick={handleSignIn}
        className="w-full flex justify-center items-center py-3 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
      >
     <FaGithub className="mr-3 text-2xl" />
     <span className="font-semibold text-xl">Sign In with GitHub</span>
      </button>
      {message && <div className="mt-4 text-blue-600">{message}</div>}
    </div>
    </div>
  );
}



