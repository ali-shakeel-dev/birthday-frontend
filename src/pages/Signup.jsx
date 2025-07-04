import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    if (!email.includes('@')) {
      toast.error("Please provide a valid email.");
      setError('Please provide a valid email.');
      return;
    }
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters.');
      return;
    }
    if (password !== confirm) {
      toast.error('Passwords do not match.');
      return;
    }
    // Dummy handler - navigate to dashboard
    navigate('/dashboard');
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 px-4">
      <div className="bg-white rounded-xl shadow-md w-full max-w-sm p-8 border border-pink-100">
        <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center">Sign up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm text-gray-600">Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-pink-200 bg-pink-50" />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-600">Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-pink-200 bg-pink-50" minLength={6} />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-600">Confirm Password</label>
            <input type="password" value={confirm} onChange={e => setConfirm(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-pink-200 bg-pink-50" minLength={6} />
          </div>
          {error && <div className="text-sm text-red-500 text-center">{error}</div>}
          <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg py-2 transition">Sign up</button>
        </form>
        <div className="mt-6 text-center text-sm">
          Already have an account? <Link to="/login" className="text-pink-500 hover:underline">Login</Link>
        </div>
      </div>
    </div>
  );
}
// ... existing code ... <blank file> ...
