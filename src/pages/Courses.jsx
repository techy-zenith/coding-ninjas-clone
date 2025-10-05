import React, { useEffect } from 'react';
import useCourseStore from '../store/courseStore';
import CourseCard from '../components/CourseCard';
import Loader from '../components/Loader';

const Courses = () => {
  const { courses, loading, fetchCourses } = useCourseStore();

  useEffect(() => { fetchCourses(); }, [fetchCourses]);

  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Courses</h1>
      {loading ? <Loader /> : (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {courses.map(course => <CourseCard key={course.id} course={course} />)}
        </div>
      )}
    </section>
  );
};
export default Courses;