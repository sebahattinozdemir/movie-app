import { useEffect, useState } from "react";
import { searchMovies } from "../data/api/searchMovies";
import { MovieSearchParams } from "../data/models/movie.interface";
  
export function useMovieSearch({ searchTerm, currentPage, contentType, year }: MovieSearchParams) {
    const [movies, setMovies] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchMovies = async () => {
        setLoading(true);
        setError(null);
        try {
          const data = await searchMovies(searchTerm, currentPage, contentType, year);
          console.log(data);
          setMovies(data.Search || []);
          setTotalResults(parseInt(data.totalResults) || 0);
  
          if (!data.Search || data.Search.length === 0) {
            setError('No movies match your search criteria.');
          }
        } catch (err) {
          console.error('Error fetching movies:', err);
          setMovies([]); 
          setTotalResults(0);
          setError('Failed to fetch movies. Please try again later.');
        } finally {
          setLoading(false);
        }
      };
  
      fetchMovies();
    }, [searchTerm, currentPage, contentType, year]);
  
    return { movies, totalResults, loading, error };
  }