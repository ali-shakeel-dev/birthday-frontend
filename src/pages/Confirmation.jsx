import React from 'react';
import { Link } from 'react-router-dom';

export default function Confirmation() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50">
      <div className="bg-white p-8 rounded-lg shadow border border-pink-100 text-center">
        <h2 className="text-2xl font-bold text-pink-600 mb-4">🎉 Wish Scheduled!</h2>
        <p className="text-gray-600 mb-4">We’ll make sure your birthday wish goes out at the right time.</p>
        <Link to="/dashboard" className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">Go to Dashboard</Link>
      </div>
    </div>
  );
}
