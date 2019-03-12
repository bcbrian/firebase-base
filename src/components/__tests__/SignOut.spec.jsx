import React from 'react';
import renderer from 'react-test-renderer';
import SignOut from '../SignOut';

describe('SignOut Component', () => {
  it('should render sign up', () => {
    const onSignOut = jest.fn();
    const SignOutComp = renderer.create(<SignOut onSignOut={onSignOut} />);
    expect(SignOutComp.toJSON()).toMatchSnapshot();
  });

  it('should call the onSignOut prop function', () => {
    const onSignOut = jest.fn();
    const SignOutComp = renderer.create(<SignOut onSignOut={onSignOut} />);
    SignOutComp.getInstance().handleClick();
    expect(onSignOut).toHaveBeenCalledTimes(1);
    expect(SignOutComp.toJSON()).toMatchSnapshot();
  });
});
