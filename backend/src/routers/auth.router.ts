import { Express, Router } from "express";
import { AuthModule } from "../modules/auth/auth.module";
import { AuthController } from "../modules/auth/auth.controller";
import { IApplicationRouter } from "../shared/interfaces/application-router.interface";

export class AuthRouter implements IApplicationRouter<AuthController> {
  router: Router = Router();
  controller: AuthController;

  constructor() {
    this.controller = new AuthModule().authController;
  }

  registerRoutes(app: Express) {
    this.router.post("/register", this.controller.handleRegister);
    this.router.post("/sign-in", this.controller.handleAuthenticate);
    this.router.get("/profile", this.controller.handleGetProfile);

    app.use("/auth", this.router);
  }
}
