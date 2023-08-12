import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have an email input field', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('#email').length).toEqual(1);
  });

  it('should have a password input field', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('#password').length).toEqual(1);
  });

  it('should have a submit button', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('button[type="submit"]').length).toEqual(1);
  });

  it('should call handleSubmit when the form is submitted', () => {
    const handleSubmitMock = jest.fn();
    const wrapper = shallow(<Login handleSubmit={handleSubmitMock} />);
    wrapper.find('#loginForm').simulate('submit');
    expect(handleSubmitMock).toHaveBeenCalled();
  });
});