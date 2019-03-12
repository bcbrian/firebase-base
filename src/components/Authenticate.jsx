import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignUp from './SignUp';
import SignIn from './SignIn';
import SignOut from './SignOut';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default class Authenticate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSignUp: false,
      isSignIn: false
    };
  }

  handleClickSignUp = () => {
    this.setState(({ isSignUp }) => ({ isSignUp: !isSignUp }));
  };

  handleClickSignIn = () => {
    this.setState(({ isSignIn }) => ({ isSignIn: !isSignIn }));
  };

  render() {
    const { user, onSignOut, onSignIn, onSignUp } = this.props;
    const { isSignUp, isSignIn } = this.state;
    return user ? (
      <>
        <Grid>
          <SignOut onSignOut={onSignOut} />
        </Grid>
      </>
    ) : (
      <>
        <Grid container spacing={16} justify="flex-end">
          <Grid item>
            <Button
              color="secondary"
              variant="contained"
              onClick={this.handleClickSignUp}
            >
              Sign Up
            </Button>
          </Grid>
          <Grid item>
            <Button
              color="secondary"
              variant="contained"
              onClick={this.handleClickSignIn}
            >
              Sign In
            </Button>
          </Grid>
        </Grid>

        {isSignUp && (
          <SignUp
            onSignUp={onSignUp}
            open={isSignUp}
            toggle={this.handleClickSignUp}
          />
        )}
        {isSignIn && (
          <SignIn
            onSignIn={onSignIn}
            open={isSignIn}
            toggle={this.handleClickSignIn}
          />
        )}
      </>
    );
  }
}

Authenticate.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string
  }),
  onSignOut: PropTypes.func.isRequired,
  onSignIn: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired
};

Authenticate.defaultProps = {
  user: null
};
