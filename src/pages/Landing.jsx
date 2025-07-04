// src/pages/Landing.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="flex flex-col bg-pink-50">
      {/* Hero Section */}
      <section className="container mx-auto gap-10 min-h-[90vh] flex justify-between items-center lg:px-20 py-20 ">
        <div className="max-w-2xl w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4 drop-shadow-[2px_2px_0_rgb(249, 99, 164)]">Never Feel Forgotten on Your Birthday Again 🎉</h1>
          <p className="text-gray-600 mb-8 text-lg">
            Get a meaningful, human-like wish delivered to your inbox on your special day—even if your friends forget.
          </p>
          <Link to="/signup" className="inline-block px-6 py-3 bg-pink-500 text-white rounded-full font-semibold shadow hover:bg-pink-600">
            Get Started Free
          </Link>
        </div>
        <div>
          <img src="/hero_gif.gif" alt="Happy Birthday Gif" className="w-[700px] rounded-2xl pointer-events-none select-none" />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-pink-600 mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-pink-50 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">1. Sign Up</h3>
              <p className="text-sm text-gray-600">Create a free account with your name, email, and birthday.</p>
            </div>
            <div className="p-6 bg-pink-50 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">2. Customize</h3>
              <p className="text-sm text-gray-600">Choose the tone of your message — sweet, funny, or motivational.</p>
            </div>
            <div className="p-6 bg-pink-50 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">3. Get Wished</h3>
              <p className="text-sm text-gray-600">We send a thoughtful birthday wish to your inbox at the perfect time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-pink-100 py-16 text-center px-4">
        <div className="max-w-xl mx-auto flex items-center flex-col gap-5">
          <img src="/granny.gif" alt="Happy Birthday Granny" className="rounded-full pointer-events-none select-none" />
          <h2 className="text-2xl md:text-3xl font-bold text-pink-700">
            Ready to receive a meaningful birthday wish?
          </h2>
          <p className="text-gray-600">No friends? No problem. Let us remember you.</p>
          <Link
            to="/signup"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-full font-semibold shadow"
          >
            Start Now — It’s Free
          </Link>
        </div>
      </section>
    </div>
  );
}
