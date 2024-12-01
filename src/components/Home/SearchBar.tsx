import React, { useState } from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel, Grid, Button } from '@mui/material';

interface SearchBarProps {
  onSearch: (term: string) => void;
  onTypeChange: (type: string) => void;
  onYearChange: (year: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onTypeChange, onYearChange }) => {
  const [searchTerm, setSearchTerm] = useState('Pokemon');
  const [contentType, setContentType] = useState('movie');
  const [year, setYear] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
    onTypeChange(contentType);
    onYearChange(year);
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          label="Search Movies"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Type</InputLabel>
          <Select
            value={contentType}
            onChange={(e) => setContentType(e.target.value as string)}
            label="Type"
          >
            <MenuItem value="movie">Movie</MenuItem>
            <MenuItem value="series">TV Series</MenuItem>
            <MenuItem value="episode">TV Episode</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField
          fullWidth
          label="Year"
          variant="outlined"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="e.g., 2023"
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleSearch}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchBar;

