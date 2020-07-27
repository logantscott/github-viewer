import React, { Component } from 'react';
import UserForm from '../components/user-form/UserForm';
import UserDetails from '../components/user-details/UserDetails';
import UserRepos from '../components/user-repos/UserRepos';
import { userLookup, userRepos } from '../services/github';

export default class MainContainer extends Component {
  state = {
    userQuery: '',
    userDetails: '',
    userRepos: []
  }

  handleChange = ({ target }) => {
    this.setState({ userQuery: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Promise.all([
      userLookup(this.state.userQuery),
      userRepos(this.state.userQuery)
    ])
      .then(([userDetails, userRepos]) => {
        this.setState({ userDetails, userRepos });
      });
  }

  render() {
    const { userQuery, userDetails, userRepos } = this.state;

    return (
      <>
        <UserForm userQuery={userQuery} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <UserDetails userDetails={userDetails} />
        <UserRepos repos={userRepos} />
      </>
    );
  }
}