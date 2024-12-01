import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Grid, Button, Chip } from '@mui/material';
import { getMovieDetails } from '../data/api/getMovieDetails';
import { Movie } from '../data/models/movie.interface';

interface MovieDetailsProps {}

const MovieDetails: React.FC<MovieDetailsProps> = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (id) {
        try {
          const data = await getMovieDetails(id);
          setMovie(data);
        } catch (error) {
          console.error('Error fetching movie details:', error);
        }
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Card>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <CardMedia
            component="img"
            height="500"
            image={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.svg?height=500&width=300'}
            alt={movie.Title}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <CardContent>
            <Typography variant="h4" component="h1" gutterBottom>
              {movie.Title} ({movie.Year})
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              {movie.Rated} | {movie.Runtime} | {movie.Genre}
            </Typography>
            <Typography variant="body1" paragraph>
              {movie.Plot}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <strong>Director:</strong> {movie.Director}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <strong>Cast:</strong> {movie.Actors}
            </Typography>
            <Chip 
              label={`IMDb Rating: ${movie.imdbRating}`} 
              color="primary" 
              sx={{ marginTop: 2, marginBottom: 2 }}
            />
            <br />
            <Button component={Link} to="/" variant="contained" color="primary" sx={{ marginTop: 2 }}>
              Back to Search
            </Button>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default MovieDetails;

