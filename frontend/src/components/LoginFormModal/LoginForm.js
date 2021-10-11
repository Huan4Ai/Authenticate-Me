import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css"
import { NavLink } from "react-router-dom";

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

  return (
    <div className="login_container">
      <div className="title_form_container">
        <div className="title_description_container">
          <div className="doguora_title">
            <h1>Doguora</h1>
          </div>
          <div className="title_description">
            <p>A place to share knowledge and better understand dogs</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="login_form">
          <div className="login_errors">
            <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
          </div>
          <div className="username">
            <div className="username_label">
            <label>
              Username or Email
            </label>
            </div>
            <div className="username_input">
              <input
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                placeholder="Your username or email"
                required
              />
            </div>
          </div>
          <div className="password">
            <div className="password_label">
              <label>
                Password
              </label>
            </div>
            <div className="password_input">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                required
              />
            </div>
          </div>
          <button type="submit" className="login_button">Login</button>
        </form>
      <NavLink to="/signup">Sign Up</NavLink>
      </div>
    </div>
  );
}

export default LoginForm;
