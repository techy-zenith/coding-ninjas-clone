import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => (
  <div className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition">
    <h2 className="text-lg font-bold mb-2">{course.title}</h2>
    <p className="text-gray-600 mb-2">{course.description}</p>
    <p className="font-semibold text-orange-600 mb-4">₹{course.price}</p>
    <Link to={`/courses/${course.id}`} className="text-sm text-blue-500 hover:underline">View Details</Link>
  </div>
);

export default CourseCard;