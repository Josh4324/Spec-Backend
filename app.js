const express = require("express");
const Middleware = require("./middlewares/common");
const sequelize = require("sequelize");
require("dotenv").config();
const chalk = require("chalk");
const Response = require("./helpers/Response");
const DB = require("./config/config");


const questionRoutes = require("./routes/questions");

const port = process.env.PORT || 3000;

const app = express();
Middleware(app);


//REGISTER ROUTES HERE
app.use("/api/v1", questionRoutes);

app.get("/api", (req, res) => {
  const response = new Response(
    true,
    200,
    `Welcome to SPEC Backend ${port}`
  );
  res.status(response.code).json(response);
});

//Handling unhandle routes
app.all("*", (req, res, next) => {
  const response = new Response(
    false,
    404,
    `Page not found. Can't find ${req.originalUrl} on this server`
  );
  return res.status(response.code).json(response);
});

//listening to port
app.listen(port, () => {
  console.log(`Welcome to SPEC Backend running on port ${port}`);
});
