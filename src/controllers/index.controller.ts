import { Request, Response } from "express";
import { hostname } from "os";

export class IndexController {
  public static async welcome(req: Request, res: Response) {
    res.send({
      welcome: "Welcome to Descaptcha",
      hostname: hostname(),
      pid: process.pid,
      node_version: process.versions.node,
      date_time: new Date(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    });
  }
}
