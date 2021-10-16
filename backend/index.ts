import express = require("express");
import { check } from "express-validator";

const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.post("/", check("url").isURL(), (req, res) => {
  res.send(`The submitted URL is: ${req.body.url}`);
});

app.listen(8000, () => {
  console.log("Server is live on" + process.env.PORT);
});
