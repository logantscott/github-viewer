import React from 'react';
import { shallow } from 'enzyme';
import UserDetails from './UserDetails';

const userDetails = {
  login: 'logantscott',
  url: 'https://github.com/logantscott',
  avatar_url: 'https://avatars2.githubusercontent.com/u/57209519?s=460&u=8fad17c44cbb8ea89b7fc34c8475dd4d181a9604&v=4',
  followers: 1,
  following: 2
};

describe('UserDetails component', () => {
  it('renders UserDetails', () => {
    const wrapper = shallow(<UserDetails userDetails={userDetails} />);
    expect(wrapper).toMatchSnapshot();
  });
});
  