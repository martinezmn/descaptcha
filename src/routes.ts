import { routeInterface } from "./config/load.routes";
import { AuthController } from "./controllers/auth.controller";
import { IndexController } from "./controllers/index.controller";
import { UsersController } from "./controllers/users.controller";

export const appRoutes: routeInterface[] = [
  {
    path: "/",
    method: "get",
    action: IndexController.welcome,
    protected: true,
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
    action: AuthController.login,
  },
];
