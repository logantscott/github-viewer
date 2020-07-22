import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserForm.css';

const UserForm = ({ userQuery, onChange, onSubmit }) => (
  <form className={styles.UserForm} onSubmit={onSubmit}>
    <input type="text" value={userQuery} onChange={onChange} />
    <button>Submit</button>
  </form>
);

UserForm.propTypes = {
  userQuery: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default UserForm;
