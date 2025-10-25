import React from 'react';
import { Movie } from '../types';
import MovieCard from './MovieCard';

interface MovieGridProps {
  title: string;
  movies: Movie[];
  onSelectMovie: (movie: Movie) => void;
}

const MovieGrid: React.FC<MovieGridProps> = ({ title, movies, onSelectMovie }) => {
  return (
    <div className="group">
      <h2 className="text-xl md:text-2xl font-bold mb-4">{title}</h2>
      {movies.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onSelectMovie={onSelectMovie} />
          ))}
        </div>
      ) : (
        <p className="text-gray-400">ไม่พบหนังที่ตรงกับเงื่อนไข</p>
      )}
    </div>
  );
};

export default MovieGrid;
