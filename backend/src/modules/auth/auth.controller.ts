import { AuthService } from "./auth.service";
import { ControllerMethod } from "../../shared/types/controller-fn.type";

export class AuthController {
  constructor(private readonly authService: AuthService) {}

  handleRegister: ControllerMethod = (request, response) => {};

  handleAuthenticate: ControllerMethod = (request, response) => {};

  handleGetProfile: ControllerMethod = (request, response) => {};
}
