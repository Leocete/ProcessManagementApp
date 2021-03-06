import React, { ReactElement, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import './_styles.scss';

import Copyright from 'components/Copyright';
import { signIn } from 'actions/Auth';
import { AuthReducerState } from 'interfaces/Auth';
import { connect, useDispatch } from 'react-redux';

const SignInSide: React.FC = (): ReactElement => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  return (
    <Grid container component="main" className="login">
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className="login__image" />
      <Grid item xs={12} sm={8} md={5} className="login__form__wrapper" component={Paper} elevation={6} square>
        <div className="login__form__paper">
          <Avatar className="avatar">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
            className="login__form"
            noValidate
            onSubmit={(e): void => {
              e.preventDefault();
              dispatch(signIn({ email, password }));
              // signIn({ email, password });
            }}
          >
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(event): void => setEmail(event.target.value)}
            />
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(event): void => setPassword(event.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" className="login__form__remember-me" />}
              label="Remember me"
            />
            <Button type="submit" fullWidth variant="contained" className="login__form__submit">
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" className="login__form__additional-actions">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" className="login__form__additional-actions">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = ({ auth }: { auth: AuthReducerState }): AuthReducerState => auth;

export default connect(mapStateToProps, { signIn })(SignInSide);
