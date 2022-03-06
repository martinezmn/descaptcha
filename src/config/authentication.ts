import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export async function auth(req: Request, res: Response, next: NextFunction) {
  let authorization = req.headers["authorization"] ?? "";

  if (!authorization.startsWith("Bearer")) {
    return res.status(403).end();
  }

  authorization = authorization.split("Bearer ")[1];

  jwt.verify(authorization, process.env.API_KEY!, (err: any, auth: any) => {
    if (err) {
      return res.status(403).end();
    }

    res.locals.auth = auth;
    next();
  });
}
