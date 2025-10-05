import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../utils/api';
import Loader from '../components/Loader';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/courses/${id}`).then(res => {
      setCourse(res.data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <Loader />;
  if (!course) return <p className="text-center mt-10">Course not found</p>;

  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="text-gray-700 mb-4">{course.description}</p>
      <p className="font-semibold text-orange-600 text-lg">Price: ₹{course.price}</p>
    </section>
  );
};
export default CourseDetail;