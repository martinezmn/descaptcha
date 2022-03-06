import { Request, Response } from "express";

export class IndexController {
  public static async mp3(req: Request, res: Response) {
    const { mp3Url } = req.body;

    //SE VIRA

    const response = "";
    res.status(200).send({
      frase: response,
    });
  }
}
