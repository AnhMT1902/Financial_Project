import { Request, Response } from "express";
declare class DetailController {
    showDetail: (req: Request, res: Response) => Promise<void>;
    creatDetail: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteDetail: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: DetailController;
export default _default;
