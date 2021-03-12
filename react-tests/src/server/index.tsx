import * as express from "express";
//import fs from "fs";
//import path from "path";
//import { Application } from "express";
//import * as React from "react";
//import { renderToString } from "react-dom/server";
//import { DefaultPage } from "./pages/default";
//import serveStatic from "serve-static";

const app: express.Application = express();

app.use("/", (req, res, next) => {
  console.debug("LOG:", req.originalUrl);
  next();
});

app.use("/", express.static("dist"));

/*app.use("/mount.js", (req, res) => {
  console.log(req.originalUrl);
  const pat = path.join(__dirname, "mount.js");
  console.log(pat);

  fs.readFile(pat, (err, data) => {
    if (err) {
      console.log("not found");
    } else {
      console.log("found");
      res.send(data);
    }
  });
});*/
/*
app.use("/", (req, res) => {
  const str = renderToString(<DefaultPage />);
  res.send(str);
});*/

console.log("dev server listening at: http://localhost:4000");
app.listen(4000);
