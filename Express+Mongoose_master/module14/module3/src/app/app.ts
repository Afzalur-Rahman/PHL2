// const express = require("express");
import express, { Application, Request, Response } from "express";
const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  console.log({ req, res });
  res.send("Hello World!!sfsf! jjsss");
});

export default app;
