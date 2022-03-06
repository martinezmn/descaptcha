import express from "express";
import { loadRoutes } from "./config/load.routes";
import "reflect-metadata";

(async function bootstrap() {
  const app = express();

  require("dotenv").config();

  app.use(express.json());
  app.use(await loadRoutes());

  app.listen(3333, () => {
    console.info(new Date(), "Server running on port 3333");
  });
})();
