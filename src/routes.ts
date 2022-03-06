import { routeInterface } from "./config/load.routes";
import { AuthController } from "./controllers/auth.controller";
import { IndexController } from "./controllers/index.controller";
import { UsersController } from "./controllers/users.controller";
import { RecaptchaController } from "./controllers/recaptcha.controller";

export const appRoutes: routeInterface[] = [
  {
    path: "/",
    method: "get",
    action: IndexController.welcome,
  },
  {
    path: "/auth/login",
    method: "post",
    action: AuthController.login,
  },
  {
    path: "/users/add",
    method: "post",
    action: UsersController.add,
  },
  {
    path: "/recaptcha/mp3",
    method: "post",
    action: RecaptchaController.mp3,
  },
];
