import { useAuth } from '../contexts/auth';

import UnauthenticatedRoutes from './UnauthenticatedRoutes';
import AuthenticatedRoutes from './AuthenticatedRoutes';

const Routes: React.FC = () => {
  const signed = useAuth();
  return signed.token ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />;
};

export default Routes;
