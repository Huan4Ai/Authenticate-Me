import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css"

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
            <label>
              Username or Email
              <input
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="password">
            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="login_button">
            <button type="submit">Log In</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
