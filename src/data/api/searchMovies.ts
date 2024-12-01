const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

export async function searchMovies(title: string, page: number, type: string, year: string) {
  
    let queryString = `s=${encodeURIComponent(title)}`;
    queryString += `&page=${page}`;
  
    if (type) queryString += `&type=${encodeURIComponent(type)}`;
  
    if (year) queryString += `&y=${encodeURIComponent(year)}`;
  
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&${queryString}`);
      const data = await response.json();
      if (!response.ok || data.Response === 'False') {
        throw new Error(data.Error || `HTTP error! status: ${response.status}`);
      }
      return data || {};
    } catch (error) {
      throw new Error('Failed to fetch movie data. Please check your connection and try again.');
    }
  }