import React, { Component } from "react";
import Swal from "sweetalert2";
import { deleteProject, getAllProjects } from "../services/projectService";
import { getCurrentUser, getFavorites } from "../services/userService";
import PageHeader from "./common/pageHeader";
import Project from "./project";
import { FavoritesContext } from "./context/favoritesContext";
class AllProjects extends Component {
  state = { projects: [], user: "" };

  newArrProjects = [];

  static contextType = FavoritesContext;

  async componentDidMount() {
    let user = await getCurrentUser();
    this.setState({ user });
    const { data } = await getAllProjects();
    if (data.length > 0) this.setState({ projects: data });
    this.newArrProjects = data;
    const [, setFavorite] = this.context;
    let favorites = await getFavorites();
    setFavorite(favorites.data);
    return this.noProjects();
  }

  componentDidUpdate() {}

  noProjects = () => {
    return (
      <div>
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  };

  deleteProject = (project) => {
    Swal.fire({
      title: "Are you sure you want to delete this card?",
      text:
        "You won't be able to revert this, the card will be delete forever!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProject(project);
        this.setState(({ projects }) => {
          return {
            projects: projects.filter((projecti) => projecti !== project),
          };
        });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  handleOnChange = (e) => {
    let filterData = this.newArrProjects.filter((val) => {
      return (
        val.projectName.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0
      );
    });
    return this.setState({ projects: filterData });
  };

  addFavorites = () => {};

  render() {
    const { projects, user } = this.state;
    const [favorites] = this.context;
    return (
      <div className="container-fluid">
        <PageHeader titleText="All Projects Page" />
        <div className="row">
          <div className="col-12">
            <p className="text-center h4">
              Here you can view all the projects that have written
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center mt-3">
            <input
              style={{ width: 320, maxWidth: 600 }}
              className="text-center "
              type="text"
              placeholder="Search by Title"
              onChange={this.handleOnChange}
            />
          </div>
        </div>
        <div className="row">
          {projects.length > 0 &&
            projects.map((project) => (
              <Project
                key={project._id}
                project={project}
                user={user}
                isFavorite={favorites?.some(
                  (favorite) => favorite["_id"] === project._id
                )}
                deleteProject={this.deleteProject}
              />
            ))}
          {projects.length === 0 && (
            <h2 className=" mt-4 p-4">No project Found...</h2>
          )}
        </div>
      </div>
    );
  }
}

export default AllProjects;
