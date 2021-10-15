import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from '../../images/logo1.png';
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


      <div className="Header_left">
        <div className="left_logo">
          <NavLink to="/">
            <img src={logo} alt="Company Logo" className="left_logoImage" />
          </NavLink>
        </div>
        <div className="left_home">
          <i className="fas fa-home" />
        </div>
        <div className="left_answers">
          <i className="fas fa-pencil-alt" />
        </div>
      </div>

      <div className="Header_center">
        <div>
          <input type="text" placeholder="Search" className="center_inputField" />
          <i className="fas fa-search" />
        </div>
      </div>

      <div className="Header_right">
        <div className="right_user">
        <ProfileButton user={sessionUser} />
        </div>
        {/* <NavLink to="/questions">
          <button className="right_btn">Add Question</button>
        </NavLink> */}
        <CreateQuestionModal />
      </div>

    </div>
  );
}

export default Navigation;
