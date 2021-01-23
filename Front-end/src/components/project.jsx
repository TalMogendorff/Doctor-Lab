import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { removeFromFavorites, addToFavorites } from "../services/userService";
import { FavoritesContext } from "./context/favoritesContext";

const Project = ({ project, user, deleteProject, isFavorite }) => {
  const [favorites, setFavorite] = useContext(FavoritesContext);
  function handleProjectDelete(e) {
    e.preventDefault();
    deleteProject(project);
  }

  async function addProjectToFavorite({ project }) {
    setFavorite([...favorites, project]);
    return await addToFavorites(project._id);
  }

  async function removeProjectFromFavorite({ project }) {
    let filterFavorites = favorites.filter((favorite) => {
      return favorite._id !== project._id;
    });
    setFavorite([...filterFavorites]);
    return await removeFromFavorites(project._id);
  }

  return (
    <div className="container-fluid ">
      <div
        className="card  mb-3 mt-5  shadow border-white"
        style={{ borderRadius: 35, maxHeight: 700 }}
      >
        <div className="row no-gutters">
          <div className="col-md-8 pr-2">
            <div className="card-body">
              {user._id === project.user_id && (
                <div className="mr-auto">
                  <a href="#" onClick={handleProjectDelete}>
                    <i className="fas fa-trash-alt text-danger"></i>
                  </a>
                  <Link className="ml-4" to={`/edit-project/${project._id}`}>
                    <i className="fas fa-pen-square text-success"></i>
                  </Link>
                </div>
              )}
              <h1 className="card-title text-center">
                Project Name : {project.projectName}
              </h1>
              <hr className="pinkyBGC" />
              <h4
                className="text-center pt-1"
                style={{ textDecoration: "underline #33c7a7" }}
              >
                Project Tech : {project.projectTech}
              </h4>

              <p className="card-text h5 font-weight-normal pt-3">
                {project.projectDescription}
              </p>
            </div>
          </div>
          <div className="col-md-4 w-100 ">
            <img
              src={project.projectImage}
              style={{ maxWidth: 360, overflow: "hidden", borderRadius: 10 }}
              className="d-block w-100 mt-4 mx-auto"
              alt="building"
            />
          </div>

          {isFavorite ? (
            <div className="mr-auto ml-4 mb-3 mt-4">
              <i
                style={{ color: "#f32987" }}
                className="fas fa-star"
                onClick={() => removeProjectFromFavorite({ project })}
              ></i>
            </div>
          ) : (
            <div className="mr-auto ml-4 mb-3 mt-4">
              <i
                style={{ color: "#33c7a7" }}
                className="far fa-star"
                onClick={() => addProjectToFavorite({ project })}
              ></i>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
