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
    e.preventDefault();
  }

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
            <input className="loginField" id="login_Email" type="text" value={credential} onChange={(e) => setCredential(e.target.value)} placeholder="Your Email" required />
          </div>
          <label className="loginField">Password</label>
          <div>
            <input className="loginField" id="login_Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your Password" required />
          </div>
        </form>

        <div className="loginButtons">
          <SignUpFormModal />
          <button type="submit" className="login_button" onClick={handleSubmit}>Login</button>
          <button onClick={demoButton} className="demo_user">Demo User</button>
        </div>

      </div>

    </div>
  );
}

export default LoginForm;
