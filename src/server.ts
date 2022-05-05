import express, { json, Request, Response } from "express";
import { routes } from "./routes";

const app = express();

app.use(json());

app.use(routes);

app.listen(3333, () => {
  console.log(`HTTP server is running on port 3333`);
});
