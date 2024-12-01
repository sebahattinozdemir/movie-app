import { createTheme, ThemeOptions } from '@mui/material/styles';

const baseTheme: ThemeOptions = {
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
  },
  shape: {
    borderRadius: 8,
  },
};

const lightTheme: ThemeOptions = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#1976d2', // Link color for light mode
          '&:hover': {
            color: '#1565c0',
            textDecoration: 'underline',
          },
        },
      },
    },
  },
});

const darkTheme: ThemeOptions = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    text: {
      primary: '#ffffff',
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#90caf9', // Link color for dark mode
          '&:hover': {
            color: '#42a5f5',
            textDecoration: 'underline',
          },
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
