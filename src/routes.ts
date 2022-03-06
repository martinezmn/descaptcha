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
    path: "/auth/sign",
    method: "get",
    action: AuthController.sign,
  },
  {
    path: "/auth/verify/:token",
    method: "get",
    action: AuthController.verify,
  },
  {
    path: "/users/add",
    method: "post",
    action: UsersController.add,
  },
];
