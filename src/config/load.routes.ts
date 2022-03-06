import { Router, Request, Response, NextFunction } from "express";
import { auth } from "./authentication";

export interface routeInterface {
  path: string;
  method: "get" | "post";
  action: any;
  protected?: boolean;
  middlewares?: any[];
}

export async function loadRoutes() {
  const { appRoutes } = await import("../routes");
  const routes = Router();

  for (const route of appRoutes) {
    const middlewares = route.middlewares ?? [];

    if (route.protected) {
      middlewares.push(auth);
    }

    routes[route.method](
      route.path,
      middlewares,
      async (request: Request, response: Response, next: NextFunction) => {
        try {
          await route.action(request, response);
        } catch (e) {
          next(e);
        }
      }
    );
  }

  return routes;
}
