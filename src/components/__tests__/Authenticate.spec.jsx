import React from 'react';
import renderer from 'react-test-renderer';
import Authenticate from '../Authenticate';

describe('Authenticate Component', () => {
  const onSignOut = jest.fn();
  const onSignIn = jest.fn();
  const onSignUp = jest.fn();
  it('should render sign out if signed in', () => {
    const user = {
      email: 'test@test.com'
    };

    const AuthenticateComp = renderer.create(
      <Authenticate
        user={user}
        onSignUp={onSignUp}
        onSignIn={onSignIn}
        onSignOut={onSignOut}
      />
    );
    expect(AuthenticateComp.toJSON()).toMatchSnapshot();
  });

  it('should render sign in if signed out', () => {
    const AuthenticateComp = renderer.create(
      <Authenticate
        onSignUp={onSignUp}
        onSignIn={onSignIn}
        onSignOut={onSignOut}
      />
    );
    expect(AuthenticateComp.toJSON()).toMatchSnapshot();
  });

  it('should show sign up if sign up is selected', () => {
    const AuthenticateComp = renderer.create(
      <Authenticate
        onSignUp={onSignUp}
        onSignIn={onSignIn}
        onSignOut={onSignOut}
      />
    );
    AuthenticateComp.getInstance().handleClickSignUp();
    expect(AuthenticateComp.toJSON()).toMatchSnapshot();

    AuthenticateComp.getInstance().handleClickSignIn();
    expect(AuthenticateComp.toJSON()).toMatchSnapshot();
  });
});
