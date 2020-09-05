import React, { Component } from "react";
import AdminPage from "../pages/adminPage";
import Swal from "sweetalert2";
import axios from "axios";
class loginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      isLogin: false,
    };
  }
  render() {
    return (
      <div>
        {this.state.isLogin ? (
          <AdminPage islogin={this.state.isLogin} />
        ) : (
          <div class="hold-transition login-page">
            <div class="login-box">
              <div class="login-logo">
                {console.log(this.state.isLogin)}
                <a href="#">
                  <b>Admin </b>Eat & Fit
                </a>
              </div>
              <div class="card">
                <div class="card-body login-card-body">
                  <p class="login-box-msg">Sign in Admin Eat&Fit</p>

                  <form action="" method="post" onSubmit={this.handleSubmit}>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        name="username"
                        placeholder="Username"
                        onChange={this.changeForm}
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
                        onChange={this.changeForm}
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
  }

  handelLogout = () => {
    Swal.fire("", "Logoutnu8u", "success");
    this.setState({
      isLogin: false,
    });
    sessionStorage.clear();
  };
  handleSubmit = () => {
    const Login = {
      username: this.state.username,
      password: this.state.password,
    };

    if (this.state.username == "root" && this.state.password == "root") {
      console.log(Login);
      let token = "123abcd";
      this.setState({
        isLogin: true,
      });
      console.log(this.state.isLogin);
      sessionStorage.setItem("auth-token", token);

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
  changeForm = (event) => {
    let nama = event.target.name;
    let value = event.target.value;
    this.setState({
      [nama]: value,
      Validasi: "",
    });
  };
}
export default loginPage;
