/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cors, { CorsOptions } from "cors";
import express, { Application, Request, Response } from "express";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import router from "./app/routes";
import notFound from "./app/middlewares/notFound";

const app: Application = express();

//parsers
app.use(express.json());

// Define your whitelist
const whitelist = ['https://65b6a0d32ddcf98d0fabc46f--vocal-mermaid-a7123e.netlify.app', 'http://example2.com'];

// Configure CORS options with credentials support
const corsOptions: CorsOptions = {
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
    if (true) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

// Use the cors middleware with options
app.use(cors(corsOptions));
// app.use(cors({ credentials: true }));


// application routes

app.get("/", (req, res) => {
  res.status(200).json("Welcome to Flower Api store");
});

app.use("/api", router);

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
