import React, { useState, useEffect, useMemo } from 'react';
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
import Advertisement from './components/Advertisement';
import StreamingSidebar from './components/StreamingSidebar';

type FilterType = 'all' | 'movie' | 'series';

const App: React.FC = () => {
  const [movieData, setMovieData] = useState<MovieCategory[]>([]);
  const [allMovies, setAllMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedStreaming, setSelectedStreaming] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      setIsLoading(true);
      const data = await getMovies();
      const allMoviesData = data.flatMap(category => category.movies);
      
      setMovieData(data);
      setAllMovies(allMoviesData);
      setIsLoading(false);
    };
    fetchMovieData();
  }, []);
  
  const availableYears = useMemo(() => {
    if (!allMovies) return [];
    const years = new Set(allMovies.map(movie => movie.year));
    return Array.from(years).sort((a, b) => Number(b) - Number(a));
  }, [allMovies]);

  const availableGenres = useMemo(() => {
    const genreCount = new Map<string, number>();
    allMovies.forEach(movie => {
      movie.genres.forEach(genre => {
        genreCount.set(genre, (genreCount.get(genre) || 0) + 1);
      });
    });
    return Array.from(genreCount.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [allMovies]);

  const streamingServices = useMemo(() => {
    const serviceCount = new Map<string, number>();
    allMovies.forEach(movie => {
        movie.streamingOn?.forEach(service => {
            serviceCount.set(service.name, (serviceCount.get(service.name) || 0) + 1);
        });
    });
    return Array.from(serviceCount.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [allMovies]);


  useEffect(() => {
    let results = allMovies;

    if (searchQuery.trim() !== '') {
        const lowercasedQuery = searchQuery.toLowerCase();
        results = results.filter(movie =>
          movie.title.toLowerCase().includes(lowercasedQuery)
        );
    } else if (selectedYear) {
        results = results.filter(movie => movie.year === selectedYear);
    } else if (selectedGenre) {
        results = results.filter(movie => movie.genres.includes(selectedGenre));
    } else if (selectedStreaming) {
        results = results.filter(movie => 
            movie.streamingOn?.some(s => s.name === selectedStreaming)
        );
    } else if (activeFilter !== 'all') {
        results = results.filter(movie => movie.categoryTag === activeFilter);
    }
    
    setFilteredMovies(results);
  }, [searchQuery, allMovies, activeFilter, selectedYear, selectedGenre, selectedStreaming]);

  const resetFilters = () => {
    setSelectedMovie(null);
    setSearchQuery('');
    setActiveFilter('all');
    setSelectedYear(null);
    setSelectedGenre(null);
    setSelectedStreaming(null);
  }

  const handleSelectMovie = (movie: Movie) => {
    setSelectedMovie(movie);
    window.scrollTo(0, 0);
  };

  const handleGoHome = () => {
    resetFilters();
  };
  
  const handleAiSuggest = () => {
    setIsAiModalOpen(true);
  };
  
  const handleSearch = (query: string) => {
    resetFilters();
    setSearchQuery(query);
  };
  
  const handleNavigate = (filter: FilterType) => {
    resetFilters();
    setActiveFilter(filter);
  }

  const handleSelectYear = (year: number) => {
    resetFilters();
    setSelectedYear(year);
  };

  const handleSelectGenre = (genre: string) => {
    resetFilters();
    setSelectedGenre(genre);
  };

  const handleSelectStreaming = (service: string) => {
    resetFilters();
    setSelectedStreaming(service);
  }

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

  const getHomePageTitle = () => {
      if (searchQuery.trim() !== '') return `ผลการค้นหาสำหรับ: "${searchQuery}"`;
      if (selectedYear) return `หนังปี: ${selectedYear}`;
      if (selectedGenre) return `หมวดหมู่: ${selectedGenre}`;
      if (selectedStreaming) return `ผู้ให้บริการ: ${selectedStreaming}`;
      if (activeFilter === 'movie') return 'หนังทั้งหมด';
      if (activeFilter === 'series') return 'ซีรี่ส์ทั้งหมด';
      return 'หนังแนะนำ';
  }

  const renderHomePageContent = () => {
      if (searchQuery.trim() !== '' || activeFilter !== 'all' || selectedYear || selectedGenre || selectedStreaming) {
          return <MovieGrid title={getHomePageTitle()} movies={filteredMovies} onSelectMovie={handleSelectMovie} />;
      }
      
      return (
        <div className="space-y-12">
            <MovieGrid title="หนังแนะนำ" movies={allMovies.filter(m => m.categoryTag === 'movie').slice(0, 12)} onSelectMovie={handleSelectMovie} />
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
        </div>
      )
  }

  return (
    <div className="bg-brand-black min-h-screen font-sans">
      <Header 
        onGoHome={handleGoHome} 
        onAiSuggest={handleAiSuggest} 
        onSearch={handleSearch} 
        onNavigate={handleNavigate}
        onSelectYear={handleSelectYear}
        availableYears={availableYears}
        onSelectGenre={handleSelectGenre}
        availableGenres={availableGenres}
      />
      
      <Advertisement />

      <main className="container mx-auto px-4 md:px-10 lg:px-16 mt-8 pb-16">
        {selectedMovie ? (
          <MovieDetail 
            movie={selectedMovie} 
            onGoBack={handleGoHome}
            allMovies={allMovies}
            onSelectMovie={handleSelectMovie}
          />
        ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-grow w-full lg:w-3/4">
                {renderHomePageContent()}
              </div>
              <aside className="w-full lg:w-1/4 lg:sticky top-24 self-start">
                 <StreamingSidebar 
                    streamingServices={streamingServices}
                    onSelectStreaming={handleSelectStreaming}
                    selectedStreaming={selectedStreaming}
                  />
              </aside>
            </div>
        )}
      </main>
      
      <Disclaimer />
      <Footer />

      {isAiModalOpen && <AiSuggestModal onClose={() => setIsAiModalOpen(false)} />}
    </div>
  );
};

export default App;