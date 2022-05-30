import React from 'react';

import UserItem from './UserItem';

import './UsersList.css';

const UsersList = props => {
  if (!props.users.length) {
    return <div class="center"><h2>No users found.</h2></div>
  }

  return <ul className="users-list">
    {props.users.map(user => <UserItem key={user.id} user={user}/>)}
  </ul>
};

export default UsersList;