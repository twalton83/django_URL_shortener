import express = require("express");
import { check, validationResult } from "express-validator";
import { ShortenedURL } from "../models/URL";
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
    const existingUrl = await ShortenedURL.findOne({ originalUrl: req.body.url });
    if (!existingUrl) {
      const newUrl = new ShortenedURL({
        originalUrl: req.body.url,
        shortenedUrl: generateLink()
      })

      newUrl.save()
      res.send(200)
    } else {
      console.log('This is already present in the db!')
      console.log(existingUrl.shortenedUrl)
      res.send(existingUrl.shortenedUrl)
    }
  } else {
    res.status(500).send("Not a valid URL.");
  }
});

export default app;
