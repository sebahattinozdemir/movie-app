import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Movie } from '../../data/models/movie.interface';


interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <TableContainer sx={{ marginTop: 4 }} component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>Poster</TableCell>
            <TableCell>IMDb ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movies.map((movie) => (
            <TableRow key={movie.imdbID}>
              <TableCell>
                <Link component={RouterLink} to={`/movie/${movie.imdbID}`} sx={{ display: 'block', marginTop: 2 }}>
                  {movie.Title}
                </Link>
              </TableCell>
              <TableCell>{movie.Year}</TableCell>
              <TableCell>
                {movie.Poster !== 'N/A' ? (
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    loading="lazy"
                    width={60}
                    height={60}
                  />
                ) : (
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 120,
                      height: 120,
                      backgroundColor: '#f0f0f0',
                      border: '1px solid #ddd',
                      borderRadius: 4,
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      No Image
                    </Typography>
                  </Box>
                )}
              </TableCell>
              <TableCell>{movie.imdbID}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MovieList;
