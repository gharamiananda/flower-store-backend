/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cors from "cors";
import express, { Application, Request, Response } from "express";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import router from "./app/routes";
import notFound from "./app/middlewares/notFound";

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors({ credentials: true }));


// application routes

app.get("/", (req, res) => {
  res.status(200).json("Welcome to Flower Api store");
});

app.use("/api", router);

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
