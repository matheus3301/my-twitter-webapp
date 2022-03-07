import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography,
  Avatar,
  Alert,
} from '@mui/material';
import { useState } from 'react';

import Logo from '../../assets/logo.png';
import { useAuth } from '../../contexts/auth';

const Login = () => {
  const signed = useAuth();
  const [errors, setErrors] = useState<Array<string>>([]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setErrors([]);

    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const username = data.get('username')?.toString();
    const password = data.get('password')?.toString();

    const response = await signed.Login(username, password);
    if (response.error) {
      if (response.errors) {
        let responseErrors: Array<string>;
        responseErrors = [];

        response.errors.forEach((error: any) => {
          responseErrors.push(error.defaultMessage);
        });
        setErrors(responseErrors);
      } else {
        setErrors([response.message]);
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            mb: 10,
          }}
        >
          <Avatar alt="Twitter" src={Logo} sx={{ width: 60, height: 60 }} />
        </Box>
        <Typography component="h1" variant="h5">
          Sign in to Twitter
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {errors.length > 0 && (
            <Alert severity="warning">
              {errors.map((err) => {
                return (
                  <Typography
                    fontSize={11}
                    alignContent="center"
                    alignSelf="center"
                    justifyContent="center"
                  >
                    {err}
                  </Typography>
                );
              })}
            </Alert>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
