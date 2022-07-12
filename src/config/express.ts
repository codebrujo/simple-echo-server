import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";

import routerV1 from "../routes/v1/index";

const app: Express = express();

app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

// mount routes
app.use("/api/v1", routerV1);

export default app;
