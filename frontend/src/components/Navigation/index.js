import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import pugPic from '../../images/1-200P3223325910.jpg'

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  // if a user is signed in

  // if (sessionUser) {
  //   sessionLinks = (
  // // render the profile button as a link
  //     <ProfileButton user={sessionUser} />
  //   );
  // } else {
  //   sessionLinks = (
  //     <>
  //       <LoginFormModal />
  //       <NavLink to="/signup">Sign Up</NavLink>
  //     </>
  //   );
  // }

  return (
    <div className="nav-container">

      <NavLink exact to="/">Doguora</NavLink>
      {isLoaded && sessionLinks}

      <button>
        <div className="Button">
          <i className="fas fa-home" />
        </div>
      </button>

      <button>
        <div className="Button">
          <i className="fas fa-pencil-alt" />
        </div>
      </button>

      <NavLink to="/questions">
        <button type="button" id="addQuestion">
          Add question
        </button>
      </NavLink>

    </div>
  );
}

export default Navigation;
