import React, { useState, useEffect } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
import Doguora from "./Doguora2.png"
import "./SplashLanding.css"


function SplashLanding() {
  return (
    <>
      <img id="newLogo" src={Doguora}></img>
    </>


  );


}

export default SplashLanding;
