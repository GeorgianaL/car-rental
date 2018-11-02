import React from 'react';
import { Grid, TextField, Button, FormControl } from '@material-ui/core';
import facebookIcon from '../../../public/assets/facebook-app-logo.png';
import emailIcon from '../../../public/assets/email.png';
import passwordIcon from '../../../public/assets/password.png';
import Facebook from '../facebook-login';

import './style.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="login">
        <div className="login__card">
          <div className="login__card-header">
            <p className="login__card-header--title">Login</p>
          </div>
          <div className="login__card-content">
            <FormControl>
              <Grid container spacing={8} alignItems="flex-end">
                <Grid item>
                  <img src={emailIcon} alt="email-field" className="form-icon" />
                </Grid>
                <Grid item>
                  <TextField
                    id="input-with-icon-grid"
                    label="Email"
                    type="email"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={8} alignItems="flex-end">
                <Grid item>
                  <img src={passwordIcon} alt="password-field" className="form-icon" />
                </Grid>
                <Grid item>
                  <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    name="password"
                    autoComplete="current-password"
                  />
                </Grid>
              </Grid>
            </FormControl>
          </div>
          <div className="login__card-footer">
            <Button variant="contained">
              SUBMIT
            </Button>
          </div>
        </div>
        <div className="login__facebook">
          <Facebook />
        </div>
      </div>
    );
  }
}

export default Login;
