import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

export class AuthModule {
  authController!: AuthController;
  authService!: AuthService;

  constructor() {
    this.authService = new AuthService();
    this.authController = new AuthController(this.authService);
  }
}
