// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import toast from 'react-hot-toast';

export default function Dashboard() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    birthday: '',
    time: 'morning',
    style: 'sweet'
  });
  const [scheduled, setScheduled] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email.includes('@')) {
      toast.error('Please enter a valid email');
      return;
    }
    if (!form.name || !form.birthday) {
      toast.error('Please fill all required fields');
      return;
    }
    setScheduled([...scheduled, { ...form, id: Date.now() }]);
    toast.success('Wish scheduled successfully!');
    setForm({ name: '', email: '', birthday: '', time: 'morning', style: 'sweet' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white p-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md border border-pink-100">
        <h2 className="text-3xl font-bold text-pink-600 mb-6">Schedule a Birthday Wish 🎂</h2>
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          <div className="col-span-2">
            <label className="block text-sm text-gray-600 mb-1">Recipient Name</label>
            <input name="name" value={form.name} onChange={handleChange} placeholder="e.g. John Doe" className="w-full px-4 py-2 rounded border bg-pink-50 focus:outline-none focus:ring focus:ring-pink-200" required />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" className="w-full px-4 py-2 rounded border bg-pink-50 focus:outline-none focus:ring focus:ring-pink-200" required />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Birthday</label>
            <input type="date" name="birthday" value={form.birthday} onChange={handleChange} className="w-full px-4 py-2 rounded border bg-pink-50 focus:outline-none focus:ring focus:ring-pink-200" required />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Preferred Time</label>
            <select name="time" value={form.time} onChange={handleChange} className="w-full px-4 py-2 rounded border bg-pink-50">
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Message Style</label>
            <select name="style" value={form.style} onChange={handleChange} className="w-full px-4 py-2 rounded border bg-pink-50">
              <option value="sweet">Sweet</option>
              <option value="funny">Funny</option>
              <option value="motivational">Motivational</option>
            </select>
          </div>
          <div className="col-span-2">
            <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-4 rounded shadow-md transition-all">
              🎁 Schedule Wish
            </button>
          </div>
        </form>

        {/* Scheduled List */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-pink-600 mb-4">🎉 Scheduled Wishes</h3>
          {scheduled.length === 0 ? (
            <p className="text-sm text-gray-500">You haven't scheduled any wishes yet.</p>
          ) : (
            <ul className="space-y-4">
              {scheduled.map((wish) => (
                <li key={wish.id} className="p-4 rounded border border-pink-100 bg-pink-50">
                  <p className="text-sm text-gray-800">
                    <strong>{wish.name}</strong> ({wish.email})<br />
                    🎂 {wish.birthday} at {wish.time} — <em>{wish.style}</em>
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}