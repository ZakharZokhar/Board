import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import BlueButton from '../../UI/Buttons/blueButton';
import { ReactComponent as Logo } from '../../UI/Images/Logo.svg';
import './LoginPage.css';
import AuthService from '../../services/api/auth.service';
import {StyledInput} from "../../core/components/StyledInput";

const LoginPage = () => {
  const history = useHistory();
  const [loginError, setLoginError] = useState(false);
  const handleSubmit = () => {
    AuthService.login(email, password).then(
      () => {history.push("/projects");

      },
    ).catch((error) => {
      setLoginError(true)

    });
  };
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
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

  return (
    <div
      className="auth"
    >
      <div
        className="authForm"
      >
        <Link to="/"><Logo className="logotype" /></Link>
        <div className="inputWrapper">
          <StyledInput
              onChange={emailHandler}
              error={emailError}
              id={'email'}
              name={'email'}
              value={email}
              type={'text'}
              textLabel={'Email'}
              required
          />
          <StyledInput
              onChange={passwordHandler}
              error={passwordError}
              id={'password'}
              name={'password'}
              value={password}
              type={'password'}
              textLabel={'Password'}
              required
          />

          <div className="signIn">
            <button disabled={!formValid} type="button"
                    aria-label="Sign In" className="whiteButton" onClick={handleSubmit}>
              Sign In
            </button>
            {loginError ? <div style={{color: 'red'}}>Такой пользователь не найден</div> : ''}
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
