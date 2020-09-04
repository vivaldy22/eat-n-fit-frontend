import React, { Component } from "react";

class loginPage extends Component {
  render() {
    return (
      <div class="hold-transition login-page">
        <div class="login-box">
          <div class="login-logo">
            <a href="../../index2.html">
              <b>Admin </b>Eat & Fit
            </a>
          </div>

          <div class="card">
            <div class="card-body login-card-body">
              <p class="login-box-msg">Sign in Admin Eat&Fit</p>

              <form action="../../index3.html" method="post">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                  />
                  <div class="input-group-append">
                    <div class="input-group-text">
                      <span class="fas fa-envelope"></span>
                    </div>
                  </div>
                </div>
                <div class="input-group mb-3">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                  />
                  <div class="input-group-append">
                    <div class="input-group-text">
                      <span class="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-8">
                    <div class="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label for="remember">Remember Me</label>
                    </div>
                  </div>

                  <div class="col-4">
                    <button type="submit" class="btn btn-primary btn-block">
                      Sign In
                    </button>
                  </div>
                </div>
              </form>

              <p class="mb-1">
                <a href="forgot-password.html">I forgot my password</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default loginPage;
