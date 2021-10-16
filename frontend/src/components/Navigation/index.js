import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from '../../images/android-chrome-192x192.png';
import CreateQuestionModal from '../CreateQuestionPage';


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);


  return (
    // <div className="nav-container">

    //   <NavLink exact to="/">
    //     <img src={logo} alt="Doguora Logo" id="DuoguoraImage"></img>
    //   </NavLink>
    //   {isLoaded && sessionLinks}

    //   <button>
    //     <div className="Button">
    //       <i className="fas fa-home" />
    //     </div>
    //   </button>

    //   <button>
    //     <div className="Button">
    //       <i className="fas fa-pencil-alt" />
    //     </div>
    //   </button>

    //   <input type="text" placeholder="Search Doguora"></input>

    //   <NavLink to="/questions">
    //     <button type="button" id="addQuestion">
    //       Add question
    //     </button>
    //   </NavLink>

    // </div>

    <div className="Header">

      <div className="left_logo">
        <NavLink to="/">
          <img src={logo} alt="Company Logo" className="left_logoImage" />
        </NavLink>
      </div>

      <div className="left_icons">
        <div className="left_icon">
          <i className="fas fa-home" />
        </div>
        <div className="left_icon">
          <i className="fas fa-pencil-alt" />
        </div>
      </div>

      <div className="mid_search">
          <i className="fas fa-search" />
          <input type="text" placeholder="Search" className="center_inputField" />
      </div>

      <div className="right_header">
        <ProfileButton user={sessionUser} />
        <CreateQuestionModal />
      </div>

    </div>
  );
}

export default Navigation;
