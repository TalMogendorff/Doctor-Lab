const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http").Server(app);
const mongoose = require("mongoose");
const users = require("./routes/user");
const auth = require("./routes/auth");
const projects = require('./routes/emrProjects')
mongoose
  .connect("mongodb://localhost/Sheba_api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((e) => {
    console.log(`Could not connect to MongoDB : ${e}`);
  });

app.use(cors());
app.use(express.json());
app.use("/sheba/users", users);
app.use("/sheba/auth", auth);
app.use("/sheba/projects", projects);

const port = 8181;
http.listen(port, () => console.log(`Listening on port ${port}...`));
