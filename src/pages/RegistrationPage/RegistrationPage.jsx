import React from 'react';
import { Link, useHistory  } from 'react-router-dom';
import {useEffect, useState} from 'react';
import BlueButton from '../../UI/Buttons/blueButton';
import { ReactComponent as Logo } from '../../UI/Images/Logo.svg';
import './RegistrationPage.css';
import AuthService from '../../services/api/auth.service';
// import emailHandler from '../../core/components/validation'

const LoginPage = () => {
  const history = useHistory();
  const login = React.createRef();
  const pass = React.createRef();
  const name = React.createRef();

  const nameCheck = (e, email) => {
    if (e) {
     return e
    } else {
      return email.split('@')[0]
    }
  }
  const handleSubmit = () => {
    AuthService.register(email, nameCheck(name.current.value, email), password)
        .then((res)=> {history.push("/boards")});
  };


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



  const latinValid = (e, err) => {
    /* eslint-disable-next-line */
    const reg = /^[A-z\0-9\u00C0-\u00ff\s'\.,-\/#@!$%\^&\*;:{}=\-_`~()]+$/;
    if (e.target.value && !reg.test(String(e.target.value).toLowerCase())) {
      err('Только латиница!')
      return false
    } else {
      setEmailError('')
      return true
    }
  }

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const reg = /\S+@\S+\.\S+/;
    if (latinValid(e, setEmailError)) {
      if (e.target.value && !reg.test(String(e.target.value).toLowerCase())) {
        setEmailError('Некорректный E-mail')
      } else if(!e.target.value) {
          setEmailError('E-mail не может быть пустым')
          setFormValid(true)
        } else {
        setEmailError('')
        return true
      }
    }
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if (latinValid(e, setEmailError)) {
      if (e.target.value.length < 8) {
        setPasswordError('Пароль должен быть не менее 8 символов')
        if (!e.target.value) {
          setPasswordError('Пароль не может быть пустым')
        }
      } else {
        setPasswordError()
      }
    }
  }


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
          <label htmlFor='inputWrapper' className="inputName">E-mail*:</label>
          <input onChange={e => emailHandler(e)} defaultValue={email}
                 onBlur={e => blurHandler(e)} name='email' type="text" required ref={login} />
          {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
          <label htmlFor='inputWrapper' className="inputName">Password*:</label>
          <input onChange={e => passwordHandler(e)} defaultValue={password}
                 onBlur={e => blurHandler(e)} name='password' type="text" required ref={pass} />
          {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
          <div className="inputName">Name:</div>
          <input type="text" ref={name} />

          <div className="signUp">
            <button disabled={!formValid} type="button"
                    aria-label="Sign In" className="whiteButton" onClick={handleSubmit}>
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
