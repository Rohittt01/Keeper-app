import React from "react";
import AddNote from "./AddNote";

export default function Header() {
  return (
    <div className="flex flex-row justify-between items-center bg-gradient-to-r from-yellow-400 to-yellow-500 p-4">
      <h1 className="text-4xl font-bold text-white">Keeper</h1>
      <div className="flex gap-4">
        <a
          className=" px-6 py-2 bg-white text-yellow-500 border border-yellow-500 rounded-lg font-semibold text-lg shadow-md transition-transform transform hover:scale-105 hover:bg-yellow-100;"
          href="/signup"
        >
          Sign Up
        </a>
        <a
          href="/login"
          className="px-6 py-2 bg-white text-yellow-600 border border-yellow-600 rounded-lg font-semibold text-lg shadow-md transition-transform transform hover:scale-105 hover:bg-yellow-200;"
        >
          Login
        </a>
      </div>
    </div>
  );
}
