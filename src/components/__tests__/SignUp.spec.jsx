import React from 'react';
import renderer from 'react-test-renderer';
import SignUp from '../SignUp';

describe('SignUp Component', () => {
  it('should render sign up', () => {
    const onSignUp = jest.fn();
    const SignUpComp = renderer.create(<SignUp onSignUp={onSignUp} />);
    expect(SignUpComp.toJSON()).toMatchSnapshot();
  });

  it('should call the onSignUp prop function with {email, passord}', () => {
    const email = 'test@test.com';
    const password = '1234abcd';
    const onSignUp = jest.fn();
    const SignUpComp = renderer.create(<SignUp onSignUp={onSignUp} />);
    SignUpComp.getInstance().setState({ email, password });
    SignUpComp.getInstance().handleSubmit({ preventDefault: jest.fn() });
    expect(onSignUp).toHaveBeenCalledWith({ email, password });
    expect(SignUpComp.toJSON()).toMatchSnapshot();
  });
});
