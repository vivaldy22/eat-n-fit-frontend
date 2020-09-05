import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import AdminPage from "../pages/adminPage";
const LoginNew = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("auth-token") !== null) {
      onLogin();
    }
  }, []);

  const handelLogout = () => {
    Swal.fire("", "Logoutnu8u", "success");
    setIsLogin(false);
    sessionStorage.clear();
  };

  const onLogin = (Login) => {
    console.log(Login);
    let token = "123abcd";
    setIsLogin(true);
    console.log(isLogin);
    sessionStorage.setItem("auth-token", token);
  };

  const handleSubmit = () => {
    const Login = {
      username: username,
      password: password,
    };

    if (username == "root" && password == "root") {
      onLogin(Login);
      Swal.fire("Good job!", "Login", "success");
      // axios
      //   .post("/auth", Login)
      //   .then((response) => {
      //     console.log(response);
      //     console.log("ini token : " + response.data.token);
      //     token = response.data.token;
      //     sessionStorage.setItem("auth-token", response.data.token);
      //     // alert("token : " + response.data.token);
      //     this.setState({
      //       isLogin: true,
      //     });

      //     Swal.fire("Good job!", "Login", "success");
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    } else {
      Swal.fire("Password dan username salah ", "", "error");
      window.location.reload(false);
    }
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
        <AdminPage />
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

                <form action="" method="post" onSubmit={handleSubmit}>
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
      )}
    </div>
  );
};

export default LoginNew;
