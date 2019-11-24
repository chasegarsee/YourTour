const express = require("express");
require("dotenv").config();

const SERVER_CONFIGS = require("./constants/server");

const configureServer = require("./server");
const configureRoutes = require("./routes");

const app = express();

configureServer(app);
configureRoutes(app);

app.listen(SERVER_CONFIGS.PORT, error => {
  if (error) throw error;
  console.log("Server running on port: " + SERVER_CONFIGS.PORT);
});
