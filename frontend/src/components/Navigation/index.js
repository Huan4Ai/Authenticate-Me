import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import logo from '../../images/logo1.png'

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  // if a user is signed in

  if (sessionUser) {
    sessionLinks = (
  // render the profile button as a link
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className="nav-container">

      <NavLink exact to="/">
        <img src={logo} alt="Doguora Logo" id="DuoguoraImage"></img>
      </NavLink>
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

      <input type="text" placeholder="Search Doguora"></input>

      <NavLink to="/questions">
        <button type="button" id="addQuestion">
          Add question
        </button>
      </NavLink>

    </div>
    // <div className="Header">
    //   <div className="Header_left">
    //     <div className="left_logo">
    //       <img src={logo} alt="Company Logo" />
    //     </div>
    //     <div className="left_home">
    //       <i className="fas fa-home" />
    //     </div>
    //     <div className="left_answers">
    //       <i className="fas fa-pencil-alt" />
    //     </div>
    //   </div>

    //   <div className="Header_center">
    //     <div>

    //     </div>

    //   </div>

    // </div>
  );
}

export default Navigation;
