import React from 'react';
import { shallow } from 'enzyme';
import UserForm from './UserForm';

describe('UserForm component', () => {
  it('renders UserForm', () => {
    const wrapper = shallow(<UserForm userQuery='logantscott' onChange={() => {}} onSubmit={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
