import React from "react";
import PageHeader from "./common/pageHeader";
import Joi from "joi-browser";
import Form from "./common/form";
import userService from "../services/userService";
import { Redirect } from "react-router-dom";

class LogIn extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(6).label("Password"),
  };
  doSubmit = async () => {
    const { email, password } = this.state.data;

    try {
      await userService.login(email, password);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        this.setState({ errors: { email: ex.response.data } });
      }
    }
  };

  render() {
    if (userService.getCurrentUser()) return <Redirect to="/" />;

    return (
      <div className="container">
        <PageHeader titleText="Login Page" />
        <div className="row">
          <div className="col-12">
            <p className="h4 text-center">
              Here you can Login into your account
            </p>
            <hr className="pinkyBGC" />
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-lg-6">
            <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
              {this.renderInput("email", "Email", "email")}
              {this.renderInput("password", "Password", "password")}
              {this.renderButton("Login")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;
