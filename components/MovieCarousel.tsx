
import React from 'react';
import { Movie } from '../types';
import MovieCard from './MovieCard';

interface MovieCarouselProps {
  title: string;
  movies: Movie[];
  onSelectMovie: (movie: Movie) => void;
}

const MovieCarousel: React.FC<MovieCarouselProps> = ({ title, movies, onSelectMovie }) => {
  return (
    <div className="group">
      <h2 className="text-xl md:text-2xl font-bold mb-4">{title}</h2>
      <div className="relative">
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onSelectMovie={onSelectMovie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCarousel;
