"use client";

import { signOut } from "next-auth/react";
import { useState } from "react";


export default function SignOutPage() {
  const [message, setMessage] = useState("");

  const handleSignOut = async () => {
    try {
      await signOut();
      setMessage("Successfully signed out!");
    } catch (err) {
      console.error("Sign out error:", err);
      setMessage("Error signing out. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r  from-slate-800 via-slate-500 to-slate-300">
        <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-lg animation-fade-in">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">Signed In</h1>
      <p className="text-lg text-center text-gray-600 mb-6">You are currently signed in. If you want to log out, click the button below.</p>

      <button 
        onClick={handleSignOut}
        className="w-full py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
      >
        Sign Out
      </button>
      {message && (
        <div className="mt-4 text-green-600">{message}</div>
      )}
    </div>
    </div>
  );
}