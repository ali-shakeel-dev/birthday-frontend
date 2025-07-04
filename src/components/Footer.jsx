import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-pink-50 text-center py-4 text-sm text-gray-500">
      <p>© {new Date().getFullYear()} BirthdayWish. All rights reserved.</p>
    </footer>
  );
}
