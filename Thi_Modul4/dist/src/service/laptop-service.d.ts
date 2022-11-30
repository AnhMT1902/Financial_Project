import { Request, Response } from "express";
declare class LaptopService {
    findAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    addLaptop: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteLaptop: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    editLaptop: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    findLaptopByName: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    findLaptopByBrand: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: LaptopService;
export default _default;
