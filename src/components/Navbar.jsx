import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 border-b border-pink-100">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-pink-600">BirthdayWish</Link>
        <div className="space-x-4">
          <Link to="/dashboard" className="text-sm text-gray-700 hover:text-pink-500">Dashboard</Link>
          <Link to="/login" className="text-sm text-gray-700 hover:text-pink-500">Login</Link>
          <Link to="/signup" className="text-sm text-gray-700 hover:text-pink-500">Signup</Link>
        </div>
      </div>
    </nav>
  );
}