import React from "react";
import PageHeader from "./common/pageHeader";
import Joi from "joi-browser";
import Form from "./common/form";
import http from "../services/httpService";
import { doctor } from "../config.json";
// import { toast } from "react-toastify";
import  { toast } from 'react-toastify';
import userService from "../services/userService";
import { Redirect } from "react-router-dom";
class SignUp extends Form {
  state = {
    data: { email: "", password: "", name: "" },
    errors: {},
  };

  

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(6).label("Password"),
    name: Joi.string().required().min(2).label("Name"),
  };
  doSubmit = async () => {
    const data = { ...this.state.data };
    try {
      await http.post(`${doctor}/users`, data);
      toast.success(`${data.name}, You registered successfully!`, {
        position: "top-center",
        autoClose: 5000,
      });
    

      this.props.history.replace("/login");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        this.setState({ errors: { email: '"Email" is taken !' } });
      }
    }
  };
  render() {
    if (userService.getCurrentUser()) return <Redirect to="/" />;

    return (
      <div className="container">
        <PageHeader titleText="SignUp Page" />
        <div className="row">
          <div className="col-12">
            <p className="h4 text-center">
              Here you can open a new account for free
            </p>
            <hr style={{ backgroundColor: " #33c7a7" }} />
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-lg-6">
            <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
              {this.renderInput("email", "Email", "email")}
              {this.renderInput("password", "Password", "password")}
              {this.renderInput("name", "Name")}
              {this.renderButton("Signup")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
