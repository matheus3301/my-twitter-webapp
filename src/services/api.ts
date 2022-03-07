import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-twitter-spring-api.herokuapp.com',
  validateStatus: () => true,
});

export default {
  login: async (username: string | undefined, password: string | undefined) => {
    try {
      const response = await api.post('/api/auth/signin', {
        username,
        password,
      });
      return response.data;
    } catch (e) {
      return undefined;
    }
  },
  setApiBearerToken: (token: string) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  resetApiBearerToken: () => {
    api.defaults.headers.common['Authorization'] = undefined!;
  },
};
