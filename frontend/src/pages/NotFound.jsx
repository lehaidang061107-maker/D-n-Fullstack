import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-slate-50">
      <img
        src="/404_NotFound.png"
        alt="not found"
        className="w-96 max-w-full mb-6"
      />

      <p className="text-xl font-semibold">
        Oops! The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="inline-block px-6 py-3 mt-6 font-medium text-white transition bg-blue-500 rounded-2xl shadow-md hover:bg-blue-600"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;