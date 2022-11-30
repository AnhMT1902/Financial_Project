import { Request, Response } from "express";
export declare class LaptopController {
    getAll: (req: Request, res: Response) => Promise<void>;
    addLaptop: (req: Request, res: Response) => Promise<void>;
    deleteLaptop: (req: Request, res: Response) => Promise<void>;
    editLaptop: (req: Request, res: Response) => Promise<void>;
    findLapByName: (req: Request, res: Response) => Promise<void>;
}
declare const _default: LaptopController;
export default _default;
