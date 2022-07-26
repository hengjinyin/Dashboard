import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { useState } from 'react'
import ResetPasswordForm from '../../components/ResetPasswordForm/ResetPasswordForm';

const Entry = () => {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [formType, setFormType] = useState("LoginForm");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "userName":
        setUserName(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  }

  const handleOnFormChangeClick = (formType) => {
    setFormType(formType);
  }

  const handleOnLoginSubmit = (e) => {
    e.preventDefault();
    if (!userName || !password) {
      return alert("Fill up all the form!");
    }

    // TODO API
    console.log(userName, password);
    console.log("Login Submit");
  }

  const handleOnResetPasswordSubmit = (e) => {
    e.preventDefault();
    if (!userName) {
      return alert("Fill up all the form!");
    }

    // TODO API
    console.log(userName);
    console.log("Reset Password Submit");
  }
  return (
    <div className='entry'>
      {(formType === "LoginForm") && <LoginForm
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnLoginSubmit}
        handleOnFormChangeClick={handleOnFormChangeClick}
        userName={userName}
        password={password}
      />}
      {(formType === "ResetPasswordForm") &&<ResetPasswordForm
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnResetPasswordSubmit}
        handleOnFormChangeClick={handleOnFormChangeClick}
        userName={userName}
      />}
    </div>
  )
}

export default Entry