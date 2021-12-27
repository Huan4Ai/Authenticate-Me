import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css"
import SignUpFormModal from "../SignupFormPage";
import dog_people1 from "../../images/dog_people1.jpg"

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const demoButton = async (e) => {
    setCredential("Demo-lition");
    setPassword("password");
    return dispatch(
      sessionActions.login({ credential: "Demo-lition", password: "password" })
    );
  };

  return (
    <div className="page_container">
      <div className="login_container">

        <div className="top_login">
          <p id="logo">Doguora</p>
          <p id="description">A place to discuss everything about dogs!</p>
        </div>

        <form onSubmit={handleSubmit} className="login_form">
          <div className="login_errors">
            <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
          </div>
          <label className="loginField">Email</label>
          <div>
            <input className="loginField" id="login_Email" type="text" value={credential} onChange={(e) => setCredential(e.target.value)} placeholder="Your Email" />
          </div>
          <label className="loginField">Password</label>
          <div>
            <input className="loginField" id="login_Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your Password" />
          </div>
        </form>

        <div className="loginButtons">
          <button type="submit" className="login_demo_button" onClick={handleSubmit}>Login</button>
          <button onClick={demoButton} className="login_demo_button" id="demo_button">Demo User</button>
        </div>

        <SignUpFormModal />


      </div>

    </div>
  );
}

export default LoginForm;
