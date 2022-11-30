import { Request, Response } from "express";
export declare class SpendingController {
    getAll: (req: Request, res: Response) => Promise<void>;
    addSpending: (req: Request, res: Response) => Promise<void>;
    deleteSpending: (req: Request, res: Response) => Promise<void>;
    editSpending: (req: Request, res: Response) => Promise<void>;
}
declare const _default: SpendingController;
export default _default;
