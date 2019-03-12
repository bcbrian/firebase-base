import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleEmailOnChange = ({ target }) => {
    this.setState(() => ({
      email: target.value
    }));
  };

  handlePasswordOnChange = ({ target }) => {
    this.setState(() => ({
      password: target.value
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.onSignUp({ email, password });
  };

  render() {
    const { open, toggle } = this.props;
    const { email, password } = this.state;
    return (
      <Dialog open={open} onClose={toggle} aria-labelledby="form-dialog-title">
        <div>
          <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
          <form onSubmit={this.handleSubmit}>
            <DialogContent>
              <DialogContentText>
                Lets get you signed up so you can know whats left.
              </DialogContentText>
              <TextField
                iconPosition="left"
                onChange={this.handleEmailOnChange}
                value={email}
                type="text"
                name="email"
                label="Email"
                variant="outlined"
              />
              <TextField
                iconPosition="left"
                onChange={this.handlePasswordOnChange}
                value={password}
                type="password"
                name="pasword"
                label="Password"
                variant="outlined"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={toggle} color="secondary">
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Sign Up
              </Button>
            </DialogActions>
          </form>
        </div>
      </Dialog>
    );
  }
}

SignUp.propTypes = {
  onSignUp: PropTypes.func.isRequired
};
