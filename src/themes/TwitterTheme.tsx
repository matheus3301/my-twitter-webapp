import { createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          borderRadius: 20,
        },
      },
    },
  },
  palette: {
    background: {
      default: '#14171A',
    },
    primary: {
      main: '#1DA1F2',
      contrastText: '#FFF',
    },

    text: {
      primary: '#FFF',
      secondary: '#AAB8C2',
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
