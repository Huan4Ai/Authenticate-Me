import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css"
import SignUpFormModal from "../SignupFormPage";
import icon from "../../images/apple-touch-icon.png"
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
    <div className="login_container">

        <form onSubmit={handleSubmit} className="login_form">
          <div className="login_errors">
            <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
          </div>
          <div>
            <div>
            <label>
              Username or Email
            </label>
            </div>
            <div>
              <input
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                placeholder="Your username or email"
                required
              />
            </div>
          </div>
          <div>
            <div>
              <label>
                Password
              </label>
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                required
              />
            </div>
          </div>
          <div className="loginButtons">
            <SignUpFormModal />
            <button type="submit" className="login_button">Login</button>
            <button onClick={demoButton} className="demo_user">Demo User</button>
          </div>
        </form>

    </div>
  );
}

export default LoginForm;
