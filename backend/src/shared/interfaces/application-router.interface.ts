import { Express, Router } from "express";

export interface IApplicationRouter<T> {
  router: Router;
  controller: T;

  registerRoutes(app: Express): void;
}
