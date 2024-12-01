import React from 'react';
import { Container, Typography, Box, Switch, FormControlLabel } from '@mui/material';

interface LayoutProps {
  children: React.ReactNode;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, darkMode, toggleDarkMode }) => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 4,
          marginBottom: 4,
        }}
      >
        <Typography variant="h4" component="h1">
          Movie Search App
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={darkMode}
              onChange={toggleDarkMode}
              color="default"
            />
          }
          label="Dark Mode"
        />
      </Box>
      {children}
    </Container>
  );
};

export default Layout;
