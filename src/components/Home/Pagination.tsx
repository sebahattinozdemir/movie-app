
import React from 'react';
import { Pagination as MuiPagination, Typography, Box } from '@mui/material';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalResults: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, totalResults, onPageChange }) => {
  const startIndex = (currentPage - 1) * 10 + 1;
  const endIndex = Math.min(currentPage * 10, totalResults);

  return (
    <Box sx={{ marginTop: 2, marginBottom: 2, textAlign: 'center' }}>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Showing {startIndex}–{endIndex} of {totalResults} results
      </Typography>
      <MuiPagination
        count={totalPages}
        page={currentPage}
        onChange={(_, page) => onPageChange(page)}
        color="primary"
        size="large"
        sx={{ display: 'inline-block', margin: '0 auto' }}
      />
    </Box>
  );
};

export default Pagination;
