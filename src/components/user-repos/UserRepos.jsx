import React from 'react';
import PropTypes from 'prop-types';

const UserRepos = ({ repos }) => {
  const repositories = repos.map(({ node_id, id, name, description, created_at, updated_at, language, homepage }) => (
    <tr key={node_id}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{description}</td>
      <td>{created_at}</td>
      <td>{updated_at}</td>
      <td>{language}</td>
      <td>{homepage}</td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <td>id</td>
        <td>name</td>
        <td>description</td>
        <td>created_at</td>
        <td>udpated_at</td>
        <td>language</td>
        <td>homepage</td>
      </thead>
      {repositories}
    </table>
  );
};

UserRepos.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    node_id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    description: PropTypes.string,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
    homepage: PropTypes.string,
    size: PropTypes.number,
    language: PropTypes.string.isRequired
  }))
};

export default UserRepos;
