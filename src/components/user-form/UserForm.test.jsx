import React from 'react';
import { shallow } from 'enzyme';
import UserForm from './UserForm';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<UserForm userQuery='logantscott' onChange={() => {}} onSubmit={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
