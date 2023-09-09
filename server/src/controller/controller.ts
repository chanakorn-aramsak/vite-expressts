import { Request, Response } from 'express';
import { injectable } from 'inversify';
import { IBackendFramework } from "../interface/IBackendFramework";

export class Controller {
  framework: IBackendFramework;

  constructor(framework: IBackendFramework) {
    this.framework = framework;
  }

  handleGET(req: Request, res: Response): void {
    const url = req.query.url as string;
    const message = this.framework.GET(url);
    res.send(message);
  }

  handlePOST(req: Request, res: Response): void {
    const { url, data } = req.body;
    const message = this.framework.POST(url, data);
    res.send(message);
  }
}
