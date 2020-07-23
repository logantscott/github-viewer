import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserDetails.css';

const UserDetails = ({ userDetails: { login, avatar_url, url, followers, following } }) => (
  <div className={styles.UserDetails}>
    <a href={url}><img src={avatar_url} alt={login} /></a>
    <a href={url}><h2>{login}</h2></a>
    <p>Followers: {followers}, Following: {following}</p>
  </div>
);

UserDetails.propTypes = {
  userDetails: (
    PropTypes.object.isRequired,
    PropTypes.shape({
      login: PropTypes.string.isRequired,
      avatar_url: PropTypes.string,
      url: PropTypes.string.isRequired,
      followers: PropTypes.number,
      following: PropTypes.number
    })
  )
};

export default UserDetails;
