import { Controller } from './controller';

export class OiberController extends Controller {

  /**
   * @swagger
   * /oiber:
   *  get:
   *    description: Use to get Oiber
   *    responses:
   *      '200':
   *        description: A successful response
   */
  handleGET(req: any, res: any) {
    const url = req.query.url as string;
    const message = this.framework.GET(url);
    res.send(message);
  }
  

    handlePOST(req: any, res: any): void {
    const { url, data } = req.body;
    const message = this.framework.POST(url, data);
    res.send(message);
    }
}
