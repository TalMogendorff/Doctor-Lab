import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { createNewProject } from "../services/projectService";
import { toast } from "react-toastify";
import PageHeader from "./common/pageHeader";
import { Link } from "react-router-dom";
class CreateNewProject extends Form {
  state = {
    data: {
      projectName: "",
      projectDescription: "",
      projectTech: "",
      projectImage: "",
    },
    errors: {},
  };

  schema = {
    projectName: Joi.string().min(2).max(255).required(),
    projectDescription: Joi.string().min(2).max(1024).required(),
    projectTech: Joi.string().min(2).max(400).required(),
    projectImage: Joi.string().min(11).max(1024).uri().allow(""),
  };

  doSubmit = async () => {
    const data = { ...this.state.data };
    if (!data.projectImage)
      data.projectImage =
        "https://eng.sheba.co.il/webfiles/languages/2/SHEBA_LOGO_ENG_NEW.png";
    await createNewProject(data);
    toast("Your Project has been created !");
    this.props.history.replace("/my-projects");
  };

  render() {
    return (
      <div className="container">
        <PageHeader titleText="Create Card Form" />
        <div className="row">
          <div className="col-12">
            <p className="h4 text-center pb-3">Fill your Project details here </p>
            <hr className="pinkyBGC"/>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-lg-6">
            <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
              {this.renderInput("projectName", "Project Name")}
              {this.renderInput("projectDescription", "Project Description")}
              {this.renderInput("projectTech", "Project Tech")}
              {this.renderInput("projectImage", "Project Image")}
              {this.renderButton("Create Project")}
              <Link
                className="btn btn-primary mx-5 text-center"
                to="/my-projects"
              >
                <i className="fas fa-times-circle text-white"> Back</i>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateNewProject;
