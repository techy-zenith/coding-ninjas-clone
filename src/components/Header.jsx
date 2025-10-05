import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-orange-500 text-white py-4 shadow">
    <div className="container mx-auto flex justify-between items-center px-4">
      <Link to="/" className="text-2xl font-bold">Coding Ninjas Clone</Link>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/courses" className="hover:underline">Courses</Link>
      </nav>
    </div>
  </header>
);

export default Header;