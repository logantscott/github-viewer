import React from 'react';
import { shallow } from 'enzyme';
import UserRepos from './UserRepos';

const userRepos = [{
  name: 'myRepo',
  html_url: 'someurl',
  id: 1234,
  language: 'english',
  created_at: 'yesterday',
  updated_at: 'today',
  homepage: 'someotherurl',
  description: '',
  node_id: 12345678
}];

describe('UserRepos component', () => {
  it('renders UserRepos', () => {
    const wrapper = shallow(<UserRepos repos={userRepos} />);
    expect(wrapper).toMatchSnapshot();
  });
});
