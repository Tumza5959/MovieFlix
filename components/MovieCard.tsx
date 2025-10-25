import React from 'react';
import { Movie } from '../types';
import { InfoIcon } from './icons/Icons';

interface MovieCardProps {
  movie: Movie;
  onSelectMovie: (movie: Movie) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onSelectMovie }) => {
  return (
    <div 
      className="group relative flex-shrink-0 w-40 md:w-52 lg:w-64 rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:z-10 shadow-lg hover:shadow-brand-red/30"
      onClick={() => onSelectMovie(movie)}
    >
      <img src={movie.posterUrl} alt={movie.title} className="w-full h-auto aspect-[2/3] object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-2">
          <InfoIcon className="w-12 h-12 text-white mx-auto" />
          <p className="text-white font-bold mt-2">ดูรายละเอียด</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black via-black/80 to-transparent">
        <h3 className="text-white text-sm font-semibold truncate">{movie.title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
