import { useAuth } from '../../contexts/auth';
import { Button } from '@mui/material';

const Home: React.FC = () => {
  const signed = useAuth();

  return (
    <div>
      <h1>Logged!</h1>
      <Button variant="contained" onClick={() => signed.Logout()}>
        Logout
      </Button>
    </div>
  );
};

export default Home;
