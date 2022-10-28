import React from "react";
import login from "../images/login.gif";
import { NavLink } from "react-router-dom";
const Login = () => {
  return (
    <section className="signin sign-in">
      <div className="container mt-5">
        <div className="signin-content">
          <div className="signin-form">
            {/* left side  */}
            <div className="signin-image">
              <figure>
                <img src={login} alt="pic" className="signImage" />
              </figure>
              <p>
                <NavLink to="/signup" className="signin-image-link">
                  Not registered? go to Sign Up.
                </NavLink>
              </p>
            </div>
            {/* // right side  */}
            <form className="register-form" id="regiser-form">
              <h2 className="form-title">Sign In</h2>

              {/* email */}
              <div className="form-group">
                <label htmlFor="Email">
                  <i className="zmdi zmdi-email"></i>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Your Email"
                />
              </div>

              {/* password  */}
              <div className="form-group">
                <label htmlFor="password">
                  <i className="zmdi zmdi-lock"></i>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  placeholder="password"
                />
              </div>

              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signin"
                  id="signin"
                  className="form-submit"
                  value="Login"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
