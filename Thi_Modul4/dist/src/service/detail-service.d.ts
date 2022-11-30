import { Request, Response } from "express";
declare class DetailService {
    getAll: (req: Request, res: Response) => Promise<void>;
    creatDetail: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteDetail: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    findByIdSpending: (req: Request, res: Response, idS: any) => Promise<boolean>;
}
declare const _default: DetailService;
export default _default;
