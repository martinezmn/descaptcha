import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user.model";

export class AuthController {
  public static async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error("não encontrou");
    }

    const result = await user.checkPassword(password);

    if (!result) {
      throw new Error("senha errada");
    }

    const token = jwt.sign({ user }, process.env.API_KEY!);

    res.send({
      id: user.id,
      email: user.email,
      token,
    });
  }
}
