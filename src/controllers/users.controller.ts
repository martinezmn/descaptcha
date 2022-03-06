import { Request, Response } from "express";
import User from "../models/user.model";

export class UsersController {
  public static async add(req: Request, res: Response) {
    const body = req.body;

    const user = await User.create(body);

    res.send({ user });
  }
}
