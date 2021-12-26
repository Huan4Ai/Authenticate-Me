import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <form onSubmit={handleSubmit} className="signup_Form">
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <label className="signupElement">Email</label>
      <div>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="signupElement signupField" />
      </div>
      <label className="signupElement">Username</label>
      <div>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="signupElement signupField" />
      </div>
      <label className="signupElement">Password</label>
      <div>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="signupElement signupField" />
      </div>
      <label className="signupElement">Confirm Password</label>
      <div>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="signupElement signupField" />
      </div>
      <div>
        <button type="submit" className="signUpButton">Sign Up</button>
      </div>
    </form>
  );
}

export default SignupFormPage;
