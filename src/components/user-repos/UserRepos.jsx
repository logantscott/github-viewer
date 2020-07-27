import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserRepos.css';

const UserRepos = ({ repos }) => {
  const repositories = repos.map(({ node_id, id, name, description, created_at, updated_at, language, homepage, html_url }) => (
    <tr key={node_id}>
      <td>{id}</td>
      <td><a href={html_url}>{name}</a></td>
      <td>{language}</td>
      <td>{created_at}</td>
      <td>{updated_at}</td>
      <td>{homepage}</td>
      <td>{description}</td>
    </tr>
  ));

  return (
    <>
      <h2 style={{ margin: '10px 0 5px 0' }}>Repositories</h2>
      <table style={{ borderCollapse: 'collapse' }} className={styles.UserRepos}>
        <thead>
          <td>id</td>
          <td>name</td>
          <td>language</td>
          <td>created_at</td>
          <td>udpated_at</td>
          <td>homepage</td>
          <td>description</td>
        </thead>
        {repositories}
      </table>
    </>
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
