import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = () => {
  const auth = useContext(AuthContext)
  // NavLink is same as Link but interprets current route and adds active
  // pseudo class to nested anchor tag etc.
  return <ul className="nav-links">
    <li>
      <NavLink to="/" exact>ALL USERS</NavLink>
    </li>
    {auth.isLoggedIn && <li>
      <NavLink to="/u1/places">MY PLACES</NavLink>
    </li>}
    {auth.isLoggedIn && <li>
      <NavLink to="/places/new">ADD PLACE</NavLink>
    </li>}
    {!auth.isLoggedIn && <li>
      <NavLink to="/auth">AUTH</NavLink>
    </li>}
  </ul>
}

export default NavLinks;