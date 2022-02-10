import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import WhiteButton from '../../UI/Buttons/whiteButton';
import BlueButton from '../../UI/Buttons/blueButton';
import { ReactComponent as Logo } from '../../UI/Images/Logo.svg';
import './RegistrationPage.css';
import AuthService from '../../services/api/auth.service';

const LoginPage = () => {
  const navigate = useNavigate();
  const login = React.createRef();
  const password = React.createRef();
  const name = React.createRef();
  const handleSubmit = () => {
    AuthService.register(login.current.value, name.current.value, password.current.value).then(navigate('/boards'));
  };
  return (
    <div
      className="auth"
    >
      <div
        className="authForm"
      >
        <Link to="/"><Logo className="logotype" /></Link>
        <div className="inputWrapper">
          <div className="inputName">E-mail:</div>
          <input type="text" required ref={login} />
          <div className="inputName">Password:</div>
          <input type="text" required ref={password} />
          <div className="inputName">Name:</div>
          <input type="text" ref={name} />

          <div className="signUp">
            <button type="button" aria-label="Sign In" className="whiteButton" onClick={handleSubmit}>
              Sign Up
            </button>
          </div>
          <hr />
          <div className="signIn"><Link to="/auth"><BlueButton title="Sign In" /></Link></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
