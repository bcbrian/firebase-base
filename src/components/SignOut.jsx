import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

export default class SignOut extends Component {
  handleClick = () => {
    this.props.onSignOut();
  };

  render() {
    return (
      <Button variant="contained" color="primary" onClick={this.handleClick}>
        Sign Out
      </Button>
    );
  }
}

SignOut.propTypes = {
  onSignOut: PropTypes.func.isRequired
};
