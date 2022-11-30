import { Request, Response } from "express";
declare class WalletController {
    showWallet: (req: Request, res: Response) => Promise<void>;
    createWallet: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteWallet: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    uploadWallet: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    findWalletByName: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    showWalletById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: WalletController;
export default _default;
