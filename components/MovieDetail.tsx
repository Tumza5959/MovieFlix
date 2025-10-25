import React from 'react';
import { Movie } from '../types';
import { StarIcon } from './icons/Icons';

interface MovieDetailProps {
  movie: Movie;
  onGoBack: () => void;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie, onGoBack }) => {
  return (
    <div className="animate-fade-in">
      <div className="relative w-full h-[40vw] max-h-[600px] min-h-[300px]">
         <div className="absolute top-20 left-4 md:left-10 z-20">
          <button 
            onClick={onGoBack}
            className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full hover:bg-opacity-80 transition-all flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            กลับหน้าหลัก
          </button>
        </div>
        <img 
          src={movie.backdropUrl} 
          alt={`ฉากหลังจากเรื่อง ${movie.title}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-brand-black to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-10 lg:px-16 -mt-32 md:-mt-48 relative z-10 pb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">{movie.title}</h1>
        <div className="flex items-center flex-wrap gap-x-4 gap-y-2 mt-4 text-gray-300">
          <div className="flex items-center">
            <StarIcon className="w-5 h-5 text-yellow-400 mr-1" />
            <span>{movie.rating.toFixed(1)}</span>
          </div>
          <span>|</span>
          <span>{movie.year}</span>
          <div className="flex flex-wrap gap-2">
            {movie.genres.map(genre => (
              <span key={genre} className="px-2 py-1 bg-brand-gray text-xs rounded-full">{genre}</span>
            ))}
          </div>
        </div>
        
        <p className="mt-6 max-w-3xl text-gray-200 leading-relaxed">
          {movie.description}
        </p>

        {movie.streamingOn && movie.streamingOn.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">หาดูได้ที่</h3>
            <div className="flex flex-wrap gap-4">
              {movie.streamingOn.map(service => (
                <a 
                  key={service.name}
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-gray hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  {service.name}
                </a>
              ))}
            </div>
             <p className="text-gray-500 text-xs mt-3">
              *คุณอาจต้องสมัครสมาชิกเพื่อรับชมบนแพลตฟอร์มดังกล่าว
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
