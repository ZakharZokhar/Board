import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
// import WhiteButton from '../../UI/Buttons/whiteButton';
import BlueButton from '../../UI/Buttons/blueButton';
import { ReactComponent as Logo } from '../../UI/Images/Logo.svg';
import './LoginPage.css';
// import getUsers from '../../services/api/getUsers';
import AuthService from '../../services/api/auth.service';
import {useHistory} from "react-router";

const LoginPage = () => {
  const history = useHistory();
  const login = React.createRef();
  const pass = React.createRef();
  const [loginError, setLoginError] = useState(false);
  const handleSubmit = () => {
    // if (login.current.value.length > 128) return console.log('too long name');
    // if (password.current.value.length < 8) return console.log('8 chars minimum');
    AuthService.login(email, password).then(
      () => {history.push("/boards");},
    ).catch((error) => {
      console.log({ error });
      setLoginError(true)

    });
  };
  // const getUs = () => {
  //   console.log(getUsers());
  // };
  /* eslint-disable */
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Email не может быть пустым');
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
  const [formValid, setFormValid] = useState(false)

  useEffect(() => {
if (emailError || passwordError) {
  setFormValid(false)
} else {
  setFormValid(true)
}
  }, [emailError, passwordError])

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /\S+@\S+\.\S+/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный E-mail')
    } else {
      setEmailError('')
    }
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if(e.target.value.length < 8) {
      setPasswordError('Пароль должен быть не менее 8 символов')
      if(!e.target.value) {
        setPasswordError('Пароль не может быть пустым')
      }
    } else {
      setPasswordError()
    }
  }

  /* eslint-enable */
  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
            break;
      case 'password':
        setPasswordDirty(true)
        break;

    }
  }
  return (
    <div
      className="auth"
    >
      <div
        className="authForm"
      >
        <Link to="/"><Logo className="logotype" /></Link>
        <div className="inputWrapper">
          <div className="inputName">E-mail*:</div>
          <input onChange={e => emailHandler(e)} defaultValue={email}
                 onBlur={e => blurHandler(e)} name='email' type="text" required ref={login} />
          {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
          <div className="inputName">Password*:</div>
          <input onChange={e => passwordHandler(e)} defaultValue={password}
                 onBlur={e => blurHandler(e)} name='password' type="text" ref={pass} />
          {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
          <button className="whiteButton">Звездочки</button>
          <div className="signIn">
            <button disabled={!formValid} type="button"
                    aria-label="Sign In" className="whiteButton" onClick={handleSubmit}>
              Sign In
            </button>
            {loginError ? <div style={{color: 'red'}}>Такой пользователь не найден</div> : ''}
            {/*<button type="button" aria-label="Sign In" className="whiteButton" onClick={getUs}>*/}
            {/*  Get Users*/}
            {/*</button>*/}
          </div>
          <hr />
          <div className="signUp"><Link to="/reg"><BlueButton title="Sign Up" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
