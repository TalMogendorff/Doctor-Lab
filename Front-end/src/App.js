import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import HomePage from "./components/homePage";
import userService from "./services/userService";
import SignUp from "./components/signUp";
import LogIn from "./components/logIn";
import MyProjects from "./components/myProjects";
import AllProjects from "./components/allProjects";
import CreateNewProject from "./components/createNewProject";
import EditProject from "./components/EditProject";
import FavoritesProjects from "./components/favoritesProjects";
import LogOut from "./components/logOut";
import ProtectedRoute from "./components/common/protectedRoute";
import { ToastContainer } from "react-toastify";
import { FavoritesContext } from "./components/context/favoritesContext";
class App extends Component {
  state = { favorites: null, setFavorite: this.setFavorite };

  componentDidMount() {
    const user = userService.getCurrentUser();
    this.setState({ user });
  }

  setFavorite = (favorites) => {
    this.setState({ favorites });
  };

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <header>
          <ToastContainer />
          <NavBar user={user} />
        </header>

        <main>
          <FavoritesContext.Provider
            value={[this.state.favorites, this.setFavorite]}
          >
            <Switch>
              <ProtectedRoute path="/favorites" component={FavoritesProjects} />
              <ProtectedRoute
                path="/edit-project/:id"
                component={EditProject}
              />
              <ProtectedRoute
                path="/create-new-project"
                component={CreateNewProject}
              />
              <ProtectedRoute path="/all-projects" component={AllProjects} />
              <ProtectedRoute path="/my-projects" component={MyProjects} />
              <Route path="/logout" component={LogOut} />
              <Route path="/login" component={LogIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/" exact component={HomePage} />
            </Switch>
          </FavoritesContext.Provider>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
