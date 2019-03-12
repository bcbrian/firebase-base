/*
  This is the auth container
  it uses a render prop
  it calls the render prop, children prop, with user
  if user is null then they are not authenticated
  it also calls it with the authentication functions
  signUp, signIn, signOut
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { auth } from '../firebase';
import { handleSignUp, handleSignIn, handleSignOut } from '../firebase/auth';

export default class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };

    this.unsubscribeFromAuthStateChange = () => {};
  }

  componentDidMount() {
    this.unsubscribeFromAuthStateChange = auth.onAuthStateChanged(user => {
      this.setState(() => ({
        user
      }));
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuthStateChange();
  }

  render() {
    const { user } = this.state;
    if (this.props.children) {
      return this.props.children({
        user,
        handleSignUp,
        handleSignIn,
        handleSignOut
      });
    } else if (this.props.render) {
      return this.props.render({
        user,
        handleSignUp,
        handleSignIn,
        handleSignOut
      });
    }
    return <div>You did not provide a render or children prop.</div>;
  }
}

Auth.propTypes = {
  children: PropTypes.func,
  render: PropTypes.func
};

Auth.defaultProps = {
  children: null,
  render: null
};
