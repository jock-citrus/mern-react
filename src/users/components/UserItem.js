import React from 'react';

import './UserItem.css';

const UserItem = props => {
  const { user } = props
  return (
    <li className="user-item">
      <div className="user-item__content">
        <div className="user-item__image">
          <img src={user.image} alt={user.name}/>
        </div>
        <div className="user-item__info">
          <h2>{user.name}</h2>
          <h3>{user.places} {user.places === 1 ? 'Place' : 'Places'}</h3>
        </div>
      </div>
    </li>
  )
};

export default UserItem;