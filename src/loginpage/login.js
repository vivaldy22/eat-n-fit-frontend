import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import AdminPage from "../pages/adminPage";
import axios from "axios";
import { authLogin, getUser } from "../config/api";
const LoginNew = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("auth-token");
    if (token !== null) {
      onLogin(token);
    }
  }, []);

  const handelLogout = () => {
    Swal.fire("", "Logout", "success");
    setIsLogin(false);
    sessionStorage.clear();
  };

  const onLogin = (token) => {
    setIsLogin(true);
    sessionStorage.setItem("auth-token", token);
  };

  const handleSubmit = () => {
    const Login = {
      user_email: username,
      user_password: password,
    };
    authLogin(Login)
      .then((res) => {
        if (res.user.user_level == 1) {
          Swal.fire("", "berhasil login", "success");
          onLogin(res.token);
        } else {
          console.log("error");
          Swal.fire("", "username dan password salah", "error");
        }
      })
      .catch((e) => {
        Swal.fire("", "username dan password salah", "error");
        console.log(e);
      });
  };
  const changeUsername = (event) => {
    setUserName(event.target.value);
  };
  const changePassword = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div>
      {isLogin ? (
        <AdminPage logOut={handelLogout} />
      ) : (
        <div class="hold-transition login-page">
          <div class="login-box">
            <div class="login-logo">
              <a href="#">
                <b>Admin </b>Eat & Fit
              </a>
            </div>
            <div class="card">
              <div class="card-body login-card-body">
                <p class="login-box-msg">Sign in Admin Eat&Fit</p>

                {/* <form action="" method="post" onSubmit={() => handleSubmit()}> */}
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    name="username"
                    placeholder="Username"
                    onChange={changeUsername}
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
                    name="password"
                    placeholder="Password"
                    onChange={changePassword}
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
                    <button
                      type="submit"
                      class="btn btn-primary btn-block"
                      onClick={handleSubmit}
                    >
                      Sign In
                    </button>
                  </div>
                </div>
                {/* </form> */}

                <p class="mb-1">
                  <a href="forgot-password.html">I forgot my password</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginNew;
