import React from 'react';
import renderer from 'react-test-renderer';
import Auth from '../Auth';
import { auth } from '../../firebase';
import * as userAuthFunctions from '../../firebase/auth';

jest.mock('firebase');

describe('Auth Component', () => {
  let user;
  let handleSignUp;
  let handleSignIn;
  let handleSignOut;
  beforeEach(() => {
    user = {
      email: 'test@test.com'
    };
    auth.onAuthStateChanged = jest.fn(callback => callback(user));

    handleSignUp = jest.fn();
    handleSignIn = jest.fn();
    handleSignOut = jest.fn();

    userAuthFunctions.handleSignUp = handleSignUp;
    userAuthFunctions.handleSignIn = handleSignIn;
    userAuthFunctions.handleSignOut = handleSignOut;
  });
  it('returns the user and functions to children', () => {
    const childRenderProp = jest.fn(() => <div>Children Render Prop</div>);
    const AuthComp = renderer.create(<Auth>{childRenderProp}</Auth>);
    expect(childRenderProp).toHaveBeenCalledTimes(2);
    expect(childRenderProp).lastCalledWith({
      user,
      handleSignUp: userAuthFunctions.handleSignUp,
      handleSignIn: userAuthFunctions.handleSignIn,
      handleSignOut: userAuthFunctions.handleSignOut
    });
    expect(AuthComp.toJSON()).toMatchSnapshot();
  });

  it('returns the user and functions to render', () => {
    const renderProp = jest.fn(() => <div>Render Prop</div>);
    const AuthComp = renderer.create(<Auth render={renderProp} />);
    expect(renderProp).toHaveBeenCalledTimes(2);
    expect(renderProp).lastCalledWith({
      user,
      handleSignUp: userAuthFunctions.handleSignUp,
      handleSignIn: userAuthFunctions.handleSignIn,
      handleSignOut: userAuthFunctions.handleSignOut
    });
    expect(AuthComp.toJSON()).toMatchSnapshot();
  });

  it('returns develop warning if there are not children or reander props', () => {
    const AuthComp = renderer.create(<Auth />);
    expect(AuthComp.toJSON()).toMatchSnapshot();
  });
});
