import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import WhiteButton from '../../UI/Buttons/whiteButton';
import BlueButton from '../../UI/Buttons/blueButton';
import { ReactComponent as Logo } from '../../UI/Images/Logo.svg';
import './LoginPage.css';
import getUsers from '../../services/api/getUsers';
import AuthService from '../../services/api/auth.service';

const LoginPage = () => {
  const navigate = useNavigate();
  const login = React.createRef();
  const password = React.createRef();
  const handleSubmit = () => {
    // if (login.current.value.length > 128) return
    // if (password.current.value.length < 8) return
    AuthService.login(login.current.value, password.current.value).then(
      () => { navigate('/boards'); },
    ).catch((error) => {
      console.log({ error });
    });
  };
  const getUs = () => {
    console.log(getUsers());
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
          <input type="text" ref={password} />

          <div className="signIn">
            <button type="button" aria-label="Sign In" className="whiteButton" onClick={handleSubmit}>
              Sign In
            </button>

            <button type="button" aria-label="Sign In" className="whiteButton" onClick={getUs}>
              Get Users
            </button>
          </div>
          <hr />
          <div className="signUp"><Link to="/reg"><BlueButton title="Sign Up" /></Link></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
