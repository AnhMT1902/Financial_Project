import { Request, Response } from "express";
declare class UserController {
    register: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    loginUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    uploadAccount: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    uploadPassword: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getInfo: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: UserController;
export default _default;
