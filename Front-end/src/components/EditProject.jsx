import Joi  from 'joi-browser';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { editProject, getProjectById } from '../services/projectService';
import Form from "./common/form";
import PageHeader from './common/pageHeader';

class EditProject extends Form {
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
    _id: Joi.string(),
    projectName: Joi.string().min(2).max(255).required(),
    projectDescription: Joi.string().min(2).max(1024).required(),
    projectTech: Joi.string().min(2).max(400).required(),
    projectImage: Joi.string().min(11).max(1024).uri().allow(""),
  };

  async componentDidMount() {
    const projectId = this.props.match.params.id;
    const { data } = await getProjectById(projectId);
    console.log(data.data);
    this.setState({ data: this.mappingForModel(data) });
  }

  mappingForModel(data) {
    return {
      _id: data._id,
      projectName: data.projectName,
      projectDescription: data.projectDescription,
      projectTech: data.projectTech,
      projectImage: data.projectImage,
    };
  }
  doSubmit = async () => {
    const { data } = this.state;
    await editProject(data);
    toast("Your Project has been edited !");
    this.props.history.replace("/my-projects");
  };
  render() {
    return (
      <div className="container">
        <PageHeader titleText="Edit Project Form" />
        <div className="row">
          <div className="col-12">
            <p className="h4 text-center pb-3">
              Edit your Project details here
            </p>
            <hr style={{ backgroundColor: " #33c7a7" }} />
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-lg-6">
            <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
              {this.renderInput("projectName", "Project Name")}
              {this.renderInput("projectDescription", "Project Description")}
              {this.renderInput("projectTech", "Project Tech")}
              {this.renderInput("projectImage", "Project Image")}
              {this.renderButton("Edit Project")}
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
 
export default EditProject;