"use strict";
import 'dotenv/config';
import express from 'express';
import { applyMiddleware, applyRoutes } from "./utils";
import middleware from "./middleware";
import routes from "./services";

process.on("uncaughtException", e => {
  console.log(e);
  process.exit(1);
});

process.on("unhandledRejection", e => {
  console.log(e);
  process.exit(1);
});

const router = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router);

const PORT = 3001;

router.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});