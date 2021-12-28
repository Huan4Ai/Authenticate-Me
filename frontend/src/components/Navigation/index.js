import React from 'react';
import { useDispatch } from 'react-redux';
import './Navigation.css';
import CreateQuestionModal from '../CreateQuestionPage';
import * as sessionActions from '../../store/session';



function Navigation({ isLoaded }) {

  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

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

      {/* <div className="left_logo">
        <NavLink to="/">
          <img src={logo} alt="Company Logo" className="left_logoImage" />
        </NavLink>
      </div> */}
      <a id="logoOnNav" href='/'>Doguora</a>

      {/* <div className="left_icons"> */}
      <a className="left_icon" href='/'>
        <i className="fas fa-home" />
      </a>
      <a className="left_icon" href='/'>
        <i className="fas fa-pencil-alt" />
      </a>
      {/* </div> */}

      {/* <div className="mid_search">
        <i className="fas fa-search" />
        <input type="text" placeholder="Search" className="center_inputField" />
      </div> */}

      {/* <div className="right_header"> */}
      {/* <ProfileButton user={sessionUser} /> */}
      <CreateQuestionModal />
      {/* </div> */}
      <button onClick={logout} id="logOut">Logout</button>

    </div>
  );
}

export default Navigation;
