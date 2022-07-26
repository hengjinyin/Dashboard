import "./LoginForm.scss"

const LoginForm = ({ handleOnChange, handleOnSubmit, handleOnFormChangeClick, userName, password }) => {
  const dynamicStyle = (num) => {
    return "--i:" + num;
  }
  return (
    <div className='loginForm'>
      <section className="section">
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>
        <div className="box">
          <div className="square" style={{ '--i': '0' }}></div>
          <div className="square" style={{ '--i': '1' }}></div>
          <div className="square" style={{ '--i': '2' }}></div>
          <div className="container" onSubmit={handleOnSubmit}>
            <div className="form">
              <h1 className="formTitle">Login Form</h1>
              <form>
                <div className="inputBox">
                  <input className="inputBoxText" name="userName" type="text" placeholder="Username" onChange={handleOnChange}
                    value={userName} />
                </div>
                <div className="inputBox">
                  <input className="inputBoxText" name="password" type="password" placeholder="Password" onChange={handleOnChange}
                    value={password} />
                </div>
                <div className="inputBox" >
                  <input className="inputBoxText" type="submit" placeholder="Login" />
                </div>
                <p className="forget">Forgot Password ? <a href="#" onClick={() => handleOnFormChangeClick("ResetPasswordForm")}>Click Here</a></p>
                <p className="forget">Don't have an account ? <a href="#">Click Here</a></p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LoginForm