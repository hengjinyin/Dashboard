import "./ResetPasswordForm.scss"

const ResetPasswordForm = ({ handleOnChange, handleOnSubmit, handleOnFormChangeClick, userName }) => {
  const dynamicStyle = (num) => {
    return "--i:" + num;
  }
  return (
    <div className='ResetPasswordForm'>
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
              <h1 className="formTitle">Reset Password Form</h1>
              <form>
                <div className="inputBox">
                  <input className="inputBoxText" name="userName" type="text" placeholder="Username" onChange={handleOnChange}
                    value={userName} />
                </div>
                <div className="inputBox" >
                  <input className="inputBoxText" type="submit" placeholder="Reset" />
                </div>
                <p className="forget">Login Now <a href="#" onClick={() => handleOnFormChangeClick("LoginForm")}>Click Here</a></p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ResetPasswordForm