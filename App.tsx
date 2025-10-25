import React, { useState, useEffect } from 'react';
import { Movie, MovieCategory } from './types';
import { getMovies } from './services/mockFirebaseService';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieCarousel from './components/MovieCarousel';
import MovieDetail from './components/MovieDetail';
import Disclaimer from './components/Disclaimer';
import AiSuggestModal from './components/AiSuggestModal';
import MovieGrid from './components/MovieGrid';
import LatestUpdates from './components/LatestUpdates';
import MovieManagementGuide from './components/MovieManagementGuide';

const App: React.FC = () => {
  const [movieData, setMovieData] = useState<MovieCategory[]>([]);
  const [allMovies, setAllMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      setIsLoading(true);
      const data = await getMovies();
      const allMoviesData = data.flatMap(category => category.movies);
      
      setMovieData(data);
      setAllMovies(allMoviesData);
      setFilteredMovies(allMoviesData);

      setIsLoading(false);
    };
    fetchMovieData();
  }, []);
  
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredMovies(allMovies);
    } else {
      const lowercasedQuery = searchQuery.toLowerCase();
      const results = allMovies.filter(movie =>
        movie.title.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredMovies(results);
    }
  }, [searchQuery, allMovies]);

  const handleSelectMovie = (movie: Movie) => {
    setSelectedMovie(movie);
    window.scrollTo(0, 0);
  };

  const handleGoHome = () => {
    setSelectedMovie(null);
    setSearchQuery(''); // Clear search on home
  };
  
  const handleAiSuggest = () => {
    setIsAiModalOpen(true);
  };
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedMovie(null); // Go back to list view when searching
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-brand-black">
        <div className="text-center">
          <svg className="animate-spin h-10 w-10 text-brand-red mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="mt-4 text-xl">กำลังโหลดข้อมูลหนัง...</p>
        </div>
      </div>
    );
  }

  const renderHomePage = () => {
      if (searchQuery.trim() !== '') {
          return <MovieGrid title={`ผลการค้นหาสำหรับ: "${searchQuery}"`} movies={filteredMovies} onSelectMovie={handleSelectMovie} />;
      }
      
      return (
        <>
            <MovieGrid title="หนังแนะนำ" movies={allMovies.slice(0, 12)} onSelectMovie={handleSelectMovie} />
            <div className="my-8 border-t border-gray-800"></div>
            <LatestUpdates movies={allMovies} onSelectMovie={handleSelectMovie} />
            <div className="my-8 border-t border-gray-800"></div>
            {movieData.map((category) => (
                <MovieCarousel
                  key={category.id}
                  title={category.title}
                  movies={category.movies}
                  onSelectMovie={handleSelectMovie}
                />
              ))}
            <div className="my-8 border-t border-gray-800"></div>
            <MovieManagementGuide />
        </>
      )
  }

  return (
    <div className="bg-brand-black min-h-screen font-sans">
      <Header onGoHome={handleGoHome} onAiSuggest={handleAiSuggest} onSearch={handleSearch} />
      
      <main className="pb-16 px-4 md:px-10 lg:px-16 mt-8 space-y-12">
        {selectedMovie ? (
          <MovieDetail movie={selectedMovie} onGoBack={handleGoHome} />
        ) : (
            renderHomePage()
        )}
      </main>
      
      <Disclaimer />
      <Footer />

      {isAiModalOpen && <AiSuggestModal onClose={() => setIsAiModalOpen(false)} />}
    </div>
  );
};

export default App;
