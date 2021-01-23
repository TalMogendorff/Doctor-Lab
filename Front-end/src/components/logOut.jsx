import { Component } from "react";
import userService from "../services/userService";
class LogOut extends Component {
  state = {};

  componentDidMount() {
    userService.logOut();
    window.location = "/login";
  }

  render() {
    return null;
  }
}

export default LogOut;
