import React, { Component } from 'react';
import UserForm from '../components/user-form/UserForm';
import UserDetails from '../components/user-details/UserDetails';
import { userLookup } from '../services/github';

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

    userLookup(this.state.userQuery)
      .then(userDetails => {
        console.log(userDetails);
        this.setState({ userDetails });
      });
  }

  render() {
    const { userQuery, userDetails, userRepos } = this.state;

    return (
      <>
        <UserForm userQuery={userQuery} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <UserDetails userDetails={userDetails} />
      </>
    );
  }
}