import React from 'react';
import renderer from 'react-test-renderer';
import SignIn from '../SignIn';

describe('SignIn Component', () => {
  it('should render sign up', () => {
    const onSignIn = jest.fn();
    const SignInComp = renderer.create(<SignIn onSignIn={onSignIn} />);
    expect(SignInComp.toJSON()).toMatchSnapshot();
  });

  it('should call the onSignIn prop function with {email, passord}', () => {
    const email = 'test@test.com';
    const password = '1234abcd';
    const onSignIn = jest.fn();
    const SignInComp = renderer.create(<SignIn onSignIn={onSignIn} />);
    SignInComp.getInstance().setState({ email, password });
    SignInComp.getInstance().handleSubmit({ preventDefault: jest.fn() });
    expect(onSignIn).toHaveBeenCalledWith({ email, password });
    expect(SignInComp.toJSON()).toMatchSnapshot();
  });
});
