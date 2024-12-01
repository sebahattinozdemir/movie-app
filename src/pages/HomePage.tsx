import React, { useState } from 'react';
import { CircularProgress } from '@mui/material';
import SearchBar from '../components/Home/SearchBar';
import MovieList from '../components/Home/MovieList';
import Pagination from '../components/Home/Pagination';
import NoDataFound from '../components/Home/NoDataFound';
import { useMovieSearch } from '../hooks/useMovieSearch';
import useDebounce from '../utils/debounce';

const HomePage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('Pokemon');
  const [contentType, setContentType] = useState('movie');
  const [year, setYear] = useState('');

  const { movies, totalResults, loading, error } = useMovieSearch({
    searchTerm,
    currentPage,
    contentType,
    year,
  });

  const debouncedSearch = useDebounce((term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  }, 300);

  const handleSearch = (term: string) => debouncedSearch(term);

  const handleTypeChange = (type: string) => {
    setContentType(type);
    setCurrentPage(1);
  };

  const handleYearChange = (year: string) => {
    setYear(year);
    setCurrentPage(1);
  };

  return (
    <>
      <SearchBar
        onSearch={handleSearch}
        onTypeChange={handleTypeChange}
        onYearChange={handleYearChange}
      />

      {loading ? (
        <CircularProgress style={{ margin: '20px auto', display: 'block' }} />
      ) : error || movies.length === 0 ? (
        <NoDataFound message="No movies match your search criteria." onRetry={() => setCurrentPage(1)} />
      ) : (
        <MovieList movies={movies} />
      )}
      
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(totalResults / 10)}
        totalResults={totalResults}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default HomePage;
