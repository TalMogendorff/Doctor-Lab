const express = require("express");
const _ = require("lodash");
const {
  Project,
  validateProjects,
  generateRandomProjectNumber,
} = require("../models/emrProject");
const auth = require("../middleware/auth");
const router = express.Router();



router.get("/all-projects",auth, async(req,res)=> {
  Project.find({}, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});



router.get("/my-projects", auth, async (req, res) => {

  const projects = await Project.find({ user_id: req.user._id });
  res.send(projects);
});

router.delete("/:id", auth, async (req, res) => {
  const project = await Project.findOneAndRemove({
    _id: req.params.id,
    user_id: req.user._id,
  });
  if (!project)
    return res.status(404).send("The project with the given ID was not found.");
  res.send(project);
});

router.put("/:id", auth, async (req, res) => {
  const { error } = validateProjects(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let project = await Project.findOneAndUpdate(
    { _id: req.params.id, user_id: req.user._id },
    req.body
  );
  if (!project)
    return res.status(404).send("The Project with the given ID was not found.");

  project = await Project.findOne({ _id: req.params.id, user_id: req.user._id });
  res.send(project);
});

router.get("/:id", auth, async (req, res) => {
  const project = await Project.findOne({
    _id: req.params.id,
    user_id: req.user._id,
  });
  if (!project)
    return res.status(404).send("The project with the given ID was not found.");
  res.send(project);
});

router.post("/", auth, async (req, res) => {
  const { error } = validateProjects(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let project = new Project({
    projectName: req.body.projectName,
    projectDescription: req.body.projectDescription,
    projectTech: req.body.projectTech,
    projectImage: req.body.projectImage,
    projectNumber: await generateRandomProjectNumber(Project),
    user_id: req.user._id,
  });

  post = await project.save();
  res.send(post);
});

module.exports = router;
