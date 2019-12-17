const express = require("express");
const morgan = require("morgan");
const api = require("./api/v1");

const app = express();
app.use(morgan("dev"));

// CORS Setup
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:1234"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/api/v1/", api);

app.listen("3001", () => console.log("Server app listening on port 3001!"));
