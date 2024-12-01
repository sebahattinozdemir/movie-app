import { Movie } from "../models/movie.interface";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

export async function getMovieDetails(imdbID: string): Promise<Movie> {
  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`);
    const data = await response.json();

    if (!response.ok || data.Response === 'False') {
      throw new Error(data.Error || `HTTP error! status: ${response.status}`);
    }

    return data as Movie;
  } catch (error) {
    throw new Error('Failed to fetch movie details. Please check your connection and try again.');
  }
}

