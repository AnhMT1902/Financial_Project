"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const spending_1 = require("../model/spending");
const detail_service_1 = __importDefault(require("./detail-service"));
const user_1 = require("../model/user");
class SpendingService {
    constructor() {
        this.findAll = async (req, res) => {
            let spending = await spending_1.Spending.find();
            return res.status(200).json(spending);
        };
        this.addSpending = async (req, res) => {
            let spending = req.body;
            spending = await spending_1.Spending.create(spending);
            return res.status(201).json({
                message: "Success"
            });
        };
        this.deleteSpending = async (req, res) => {
            let id = req.params.id;
            let spending = await detail_service_1.default.findByIdSpending(req, res, id);
            if (!spending) {
                return res.status(200).json({
                    message: "spending da dc sd, ko the xoa"
                });
            }
            else {
                await spending_1.Spending.deleteOne({ _id: id });
                return res.status(200).json({
                    message: "spending da dc xoa"
                });
            }
        };
        this.findByIdSpending = async (req, res) => {
            let arrDetail = await spending_1.Spending.find().populate("Detail", "idSpending");
            console.log(arrDetail);
            return res.status(201).json(arrDetail);
        };
        this.editSpending = async (req, res) => {
            let spending = req.body;
            let id = req.params.id;
            await user_1.User.updateOne({ _id: id }, { $set: spending });
            return res.status(201).json({
                message: "Edit Success!!!"
            });
        };
    }
}
exports.default = new SpendingService();
//# sourceMappingURL=spending-service.js.map