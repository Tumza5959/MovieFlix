import React from 'react';
import { Movie } from '../types';
import MovieCard from './MovieCard';

interface LatestUpdatesProps {
  movies: Movie[];
  onSelectMovie: (movie: Movie) => void;
}

const LatestUpdates: React.FC<LatestUpdatesProps> = ({ movies, onSelectMovie }) => {
  const sortedMovies = [...movies]
    .sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime())
    .slice(0, 10); // Show latest 10 movies

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold mb-4">หนังอัปเดตล่าสุด</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {sortedMovies.map(movie => (
           <div key={movie.id} className="relative">
             <MovieCard movie={movie} onSelectMovie={onSelectMovie} />
             <div className="absolute top-2 right-2 bg-brand-red text-white text-xs px-2 py-1 rounded-md shadow-lg">
                {new Date(movie.dateAdded).toLocaleDateString('th-TH', {
                    day: '2-digit',
                    month: 'short',
                })}
             </div>
           </div>
        ))}
      </div>
    </div>
  );
};

export default LatestUpdates;
