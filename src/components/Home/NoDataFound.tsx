import React from 'react';
import { Box, Typography, Button } from '@mui/material';

interface NoDataFoundProps {
  message?: string;
  onRetry?: () => void;
}

const NoDataFound: React.FC<NoDataFoundProps> = ({ message = 'No Data Found', onRetry }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh',
        textAlign: 'center',
      }}
    >
      <Typography variant="h5" color="text.secondary" sx={{ marginBottom: 2 }}>
        {message}
      </Typography>
      {onRetry && (
        <Button variant="contained" color="primary" onClick={onRetry}>
          Retry
        </Button>
      )}
    </Box>
  );
};

export default NoDataFound;
