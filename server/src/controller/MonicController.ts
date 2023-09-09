import { Controller } from './controller';

export class MonicController extends Controller {

  /**
   * @swagger
   * /monic:
   *  get:
   *    description: Use to get Monic
   *    responses:
   *      '200':
   *        description: A successful response
   */
  handleGET(req: any, res: any) {
    const url = req.query.url as string;
    const message = this.framework.GET(url);
    res.send(message);
  }
  
  // Add more methods specific to Monic
  handlePOST(req: any, res: any): void {
    const { url, data } = req.body;
    const message = this.framework.POST(url, data);
    res.send(message);
  }
}
