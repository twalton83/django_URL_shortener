import express = require("express");
import { check, validationResult } from "express-validator";
import { Url } from "../models/URL";
import generateLink from "../utils";

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

 const existingUrl = await Url.find({ originalUrl: req.body.url});

 if(!existingUrl){
  const newUrl = new Url({
    originalUrl: req.body.url,
    newUrl: generateLink()
  })

  newUrl.save()
 } else {
   res.send(existingUrl.shortenedUrl)
 }



});

export default app;
