import React from 'react';
import { Movie } from '../types';
import { StarIcon } from './icons/Icons';
import MovieCarousel from './MovieCarousel';

interface MovieDetailProps {
  movie: Movie;
  allMovies: Movie[];
  onGoBack: () => void;
  onSelectMovie: (movie: Movie) => void;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie, allMovies, onGoBack, onSelectMovie }) => {

  const findRelatedMovies = () => {
    return allMovies.filter(m => 
      m.id !== movie.id && // Exclude the current movie
      m.genres.some(genre => movie.genres.includes(genre)) // Find movies with at least one common genre
    ).slice(0, 10); // Limit to 10 related movies
  };

  const relatedMovies = findRelatedMovies();

  return (
    <div className="animate-fade-in">
      <div className="relative w-full h-[30vh] md:h-[40vw] max-h-[600px] min-h-[300px]">
         <div className="absolute top-4 md:top-8 left-4 md:left-10 z-20">
          <button 
            onClick={onGoBack}
            className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full hover:bg-opacity-80 transition-all flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            กลับ
          </button>
        </div>
        <img 
          src={movie.backdropUrl} 
          alt={`ฉากหลังจากเรื่อง ${movie.title}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-brand-black to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-10 lg:px-16 -mt-16 md:-mt-32 relative z-10 pb-16">
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

        {movie.trailerUrl && (
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">วิดีโอตัวอย่าง</h3>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src={movie.trailerUrl}
                title={`ตัวอย่าง ${movie.title}`}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        )}

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
        
        {relatedMovies.length > 0 && (
          <div className="mt-12 border-t border-gray-800 pt-8">
             <MovieCarousel 
                title="เรื่องที่เกี่ยวข้อง"
                movies={relatedMovies}
                onSelectMovie={onSelectMovie}
             />
          </div>
        )}

      </div>
    </div>
  );
};

export default MovieDetail;
