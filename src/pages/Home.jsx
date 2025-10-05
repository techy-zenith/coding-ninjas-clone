import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <section className="text-center py-20">
    <h1 className="text-4xl font-bold mb-4">Welcome to Coding Ninjas Clone</h1>
    <p className="text-gray-600 mb-8">Learn, Code, and Build with the best courses online!</p>
    <Link to="/courses" className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition">
      Explore Courses
    </Link>
  </section>
);
export default Home;