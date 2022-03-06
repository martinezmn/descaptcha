import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user.model";

const JWT_KEY = "123abc";

export class AuthController {
  public static async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = User.findOne({ where: { email } });

    if (!user) {
      throw new Error("não encontrou");
    }

    const token = jwt.sign({ example: 123 }, JWT_KEY);

    res.send({ token });
  }

  public static async verify(req: Request, res: Response) {
    const { token } = req.params;
    const result = jwt.verify(token, JWT_KEY);
    res.send({ result });
  }
}
