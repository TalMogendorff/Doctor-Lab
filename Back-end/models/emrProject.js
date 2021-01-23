const Joi = require("@hapi/joi");
const mongoose = require("mongoose");
const _ = require("lodash");

const projectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
 
  projectDescription: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 1024,
  },
  projectTech: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 400,
  },
  projectImage: {
    type: String,
    required: false,
    minlength: 11,
    maxlength: 1024,
  },
  projectNumber: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 99999999999,
    unique: true,
  },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Project = mongoose.model("Project", projectSchema);

function validateProjects(project) {
  const schema = Joi.object({
    projectName: Joi.string().min(2).max(255).required(),
    projectDescription: Joi.string().min(2).max(1024).required(),
    projectTech: Joi.string().min(2).max(400).required(),
    projectImage: Joi.string().min(11).max(1024),
  });

  return schema.validate(project);
}

async function generateRandomProjectNumber(Project) {
  while (true) {
    let randomNumber = _.random(1000, 999999);
    let project = await Project.findOne({ projectNumber: randomNumber });
    if (!project) return String(randomNumber);
  }
}

exports.Project = Project;
exports.projectSchema = projectSchema;
exports.validateProjects = validateProjects;
exports.generateRandomProjectNumber = generateRandomProjectNumber;
