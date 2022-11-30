"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const detail_1 = require("../model/detail");
const spending_1 = require("../model/spending");
class DetailService {
    constructor() {
        this.getAll = async (req, res) => {
            let idWallet = req.params.id;
            let walletDetail = await detail_1.Detail.find({ idWallet: idWallet });
            res.status(200).json(walletDetail);
        };
        this.creatDetail = async (req, res) => {
            let idWallet = req.params.id;
            let detail = req.body;
            detail.idWallet = idWallet;
            await detail_1.Detail.create(detail);
            return res.status(200).json(detail);
        };
        this.deleteDetail = async (req, res) => {
            let idDetail = req.params.id;
            let detail = await detail_1.Detail.find({ _id: idDetail }, { idWallet: 1 });
            let idWallet = String(detail[0].idWallet);
            let arrDetail = await detail_1.Detail.deleteOne(detail);
            return res.status(200).json({
                message: 'success'
            });
        };
        this.findByIdSpending = async (req, res, idS) => {
            let arrDetail = await spending_1.Spending.find({ idSpending: idS });
            if (arrDetail.length === 0) {
                return false;
            }
            else {
                return true;
            }
        };
    }
}
exports.default = new DetailService();
//# sourceMappingURL=detail-service.js.map