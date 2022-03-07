import { ThemeProvider } from '@mui/system';
import { AuthProvider } from './contexts/auth';
import Routes from './routes';
import TwitterTheme from './themes/TwitterTheme';

function App() {
  return (
    <ThemeProvider theme={TwitterTheme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
