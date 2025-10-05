import { create } from 'zustand';
import api from '../utils/api';

const useCourseStore = create((set) => ({
  courses: [],
  loading: false,
  fetchCourses: async () => {
    set({ loading: true });
    try {
      const res = await api.get('/courses');
      set({ courses: res.data });
    } catch (err) {
      console.error('Error fetching courses:', err);
    } finally {
      set({ loading: false });
    }
  },
}));

export default useCourseStore;