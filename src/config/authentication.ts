import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export async function auth(req: Request, res: Response, next: NextFunction) {
  const chavePrivada = "123abc";
  let authorization = req.headers["authorization"] ?? "";

  if (!authorization.startsWith("Bearer")) {
    return res.status(403).end();
  }

  authorization = authorization.split("Bearer ")[1];

  jwt.verify(authorization, chavePrivada, (err: any, auth: any) => {
    if (err) {
      return res.status(403).end();
    }

    res.locals.auth = auth;
    next();
  });
}
