import { Request, Response } from "express";
import { PythonShell } from 'python-shell'
import {DocumentOptions} from '../config/py-shell.config'

export class RecaptchaController {
  public static async mp3(req: Request, res: Response) {
    const { mp3Url } = req.body;

    //SE VIRA

    await new Promise<void>((resolve, reject) => {
      try {
        // @ts-expect-error Error expected cause is a manually query
        PythonShell.run('getRecognition.py', DocumentOptions(mp3Url), async function (err, text: string) {
          if(err) { console.log(err); reject()}
          if(JSON.parse(text) === null || JSON.parse(text) === undefined){
            res.status(500).send({error: "Not recognized."})
          }
          res.send({response: JSON.parse(text)}).end()
          resolve()
        })
      }
      catch(error){
        reject()
      }
    })
  }
}
