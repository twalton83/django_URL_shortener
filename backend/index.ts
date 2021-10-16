import express = require("express");
import { check, validationResult } from "express-validator";

const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.post("/", async (req, res) => {
  await check("url").isURL().run(req);
  const result = validationResult(req);

  if (result.isEmpty()) {
    res.send(`The submitted URL is: ${req.body.url}`);
  } else {
    res.status(500).send("Not a valid URL.");
  }
});

export default app;
