
import { MovieCategory } from '../types';
import { MOVIE_CATEGORIES } from '../constants';

// This is a mock service. In a real application, you would use the Firebase
// SDK to fetch this data from Firestore or Realtime Database.
// e.g., import { getFirestore, collection, getDocs } from 'firebase/firestore';

export const getMovies = (): Promise<MovieCategory[]> => {
  return new Promise((resolve) => {
    // Simulate a network delay
    setTimeout(() => {
      resolve(MOVIE_CATEGORIES);
    }, 1000);
  });
};
