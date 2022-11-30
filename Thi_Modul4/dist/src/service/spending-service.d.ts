import { Request, Response } from "express";
declare class SpendingService {
    findAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    addSpending: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteSpending: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    findByIdSpending: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    editSpending: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: SpendingService;
export default _default;
