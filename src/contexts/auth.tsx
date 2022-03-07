import { createContext, useContext, useState } from 'react';
import api from '../services/api';

interface AuthContextData {
  token: string | null;
  Login(
    username: string | undefined,
    password: string | undefined
  ): Promise<any>;
  Logout(): void;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState(null);

  async function Login(
    username: string | undefined,
    password: string | undefined
  ) {
    const response = await api.login(username, password);
    const returnedToken = response.token;
    if (returnedToken) {
      setToken(returnedToken);
      api.setApiBearerToken(returnedToken);

      return true;
    }
    return response;
  }

  function Logout() {
    setToken(null);
    api.resetApiBearerToken();
  }

  return (
    <AuthContext.Provider
      value={{
        Login,
        Logout,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
