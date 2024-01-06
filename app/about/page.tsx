"use client";
import React from "react";
import "tailwindcss/tailwind.css";
import Header from "../../components/Header";
const Aboutus = () => {
  return (
    <>
      <Header />
      <div className="bg-white min-h-screen">
        <header className="bg-white">
          <div className="container mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-semibold text-gray-800">
                Welcome to My App
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-6 py-3">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-800">
              Start by signing up for an account
            </h2>
            <p className="mt-4 text-gray-600">
              Once you have an account, you can explore the features and
              benefits of our app.
            </p>

            <div className="mt-6">
              <a
                href="/signup"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg"
              >
                Get Started
              </a>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-800">
              App Features
            </h2>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-200 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800">
                  Success Statistics
                </h3>
                <p className="mt-2 text-gray-600">
                  Keep track of your success rates with personalized charts and
                  graphs.
                </p>
              </div>

              <div className="bg-red-200 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800">
                  High Risk Elements
                </h3>
                <p className="mt-2 text-gray-600">
                  Identify and address potential high risk elements to ensure
                  your success.
                </p>
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-white">
          <div className="container mx-auto px-6 py-3">
            <div className="text-center text-gray-600">
              &copy; 2022 My App. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Aboutus;
