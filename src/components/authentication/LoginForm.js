import React, { createContext, useState } from "react";
import Home from "../../pages/Home";
import Navbar from "../Header/Navbar";
import "./LoginForm.css";


const AuthContext=createContext()

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputPassword, setInputPassword] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [emailValidate, setEmailValidate] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [PasswordIsTouched, setPasswordIsTouched] = useState(false);
  const [passwordValidate, setPasswordValidate] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  let formIsValid = false;

  // Email and Password validation
  const tooggleLogin = () => {
    // setError();
    setShowSignup((prevState) => {
      return !prevState;
    });
  };
  const passwordChangeHandler = (e) => {
    setInputPassword(e.target.value);
    setPasswordIsTouched(false);
    if (e.target.value.length >= 8) {
      setPasswordValidate(true);
    } else {
      setPasswordValidate(false);
    }
  };

  const emailChangeHandler = (e) => {
    setInputEmail(e.target.value);
    setEmailIsTouched(false);
    if (e.target.value.includes(".com")) {
      setEmailValidate(true);
    } else {
      setEmailValidate(false);
    }
  };

  const toggleShowPassword = () => {
    if (inputPassword.trim().length !== 0) {
      setShowPassword((prevState) => {
        return !prevState;
      });
    }
  };

  const emailBlurHandler = () => {
    if (inputEmail.trim().length !== 0) {
      setEmailIsTouched(true);
    }
    if (!inputEmail.includes(".com")) {
      setEmailValidate(false);
    } else {
      setEmailValidate(true);
    }
  };

  const passwordBlurHandler = () => {
    if (inputPassword.trim().length !== 0) {
      setPasswordIsTouched(true);
    }
    if (inputPassword.trim().length < 8) {
      setPasswordValidate(false);
    } else {
      setPasswordValidate(true);
    }
  };
  if (emailValidate && passwordValidate) {
    formIsValid = true;
  }

  // firebase authentication
  const fetchedData = async (url, errMsg) => {
    setIsLoading(true);
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: inputEmail,
        password: inputPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data && data.error && data.error.message) {
      setError(data.error.message);
      console.log(data);
    } else {
      setError(errMsg);
      setInputEmail("");
      setInputPassword("");
      if (!showSignup) {
        setIsLogin(true);
        console.log("logged in");
      }
    }
    setIsLoading(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (showSignup) {
      fetchedData(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCxFRoh30b4410frmD97-s1E8WDygWbKGA",
        "Account created Succesfully"
      );
    } else {
      fetchedData(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCxFRoh30b4410frmD97-s1E8WDygWbKGA"
      );
    }
  };

  // if (isLogin) {
  //   return <>
  //   {/* <Navbar/> */}
  //   {/* <Home /> */}
  //   </> 
  // }
  return (
    <div>
      <section className="hero  is-fullheight-with-navbar">
        <form className="box" onSubmit={(e) => e.preventDefault()}>
          <h1 className="title has-text-centered">
            {showSignup ? "Sign Up" : "Log in"}
          </h1>

          {/* Email input using bulma css */}
          <div className="field">
            <label className="label">User Email</label>
            <div className="control has-icons-left">
              <input
                className={
                  !emailValidate && emailIsTouched ? "input is-danger" : "input"
                }
                type="email"
                placeholder="e.g hello@gmail.com"
                onChange={emailChangeHandler}
                value={inputEmail}
                onBlur={emailBlurHandler}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              {!emailValidate && emailIsTouched && (
                <p className="help is-danger">Email must contain .com</p>
              )}
            </div>
          </div>

          {/* Password input using bulma css */}

          <div className="field">
            <label className="label">User Password</label>
            <div className="control has-icons-left">
              <input
                className={
                  !passwordValidate && PasswordIsTouched
                    ? "input is-danger"
                    : "input"
                }
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password here..."
                onChange={passwordChangeHandler}
                value={inputPassword}
                onBlur={passwordBlurHandler}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
              <i
                className={
                  showPassword ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"
                }
                onClick={toggleShowPassword}
              ></i>

              {!passwordValidate && PasswordIsTouched && (
                <p className="help is-danger">
                  Password must be of at least 8 characters
                </p>
              )}
            </div>
          </div>
          {error && (
            <p className="help is-danger has-text-centered py-2">{error}</p>
          )}

          {/* Login Button */}
          <div className="field">
            <button
              className={
                isLoading
                  ? "button is-fullwidth  is-success is-loading"
                  : "button is-fullwidth  is-success"
              }
              // disabled={!formIsValid}
              onClick={submitHandler}
            >
              {showSignup ? "Create Account" : "Login"}
            </button>
          </div>

          {/* create account button */}
          <div className="field  has-text-centered">
            <button
              className="button is-danger is-inverted"
              onClick={tooggleLogin}
            >
              {showSignup ? "Login with existing account?" : "Create Account? "}
            </button>
            {isLogin && (
              <button
                className="button is-danger is-fullwidth mt-2"
                onClick={() => setIsLogin(false)}
              >
                Logout
              </button>
            )}
          </div>
        </form>
      </section>
    </div>
  );
};

export default LoginForm;
