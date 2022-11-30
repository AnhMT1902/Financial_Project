"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpendingController = void 0;
const spending_service_1 = __importDefault(require("../service/spending-service"));
const spending_service_2 = __importDefault(require("../service/spending-service"));
class SpendingController {
    constructor() {
        this.getAll = async (req, res) => {
            await spending_service_1.default.findAll(req, res);
        };
        this.addSpending = async (req, res) => {
            await spending_service_2.default.addSpending(req, res);
        };
        this.deleteSpending = async (req, res) => {
            await spending_service_2.default.deleteSpending(req, res);
        };
        this.editSpending = async (req, res) => {
            await spending_service_2.default.editSpending(req, res);
        };
    }
}
exports.SpendingController = SpendingController;
exports.default = new SpendingController();
//# sourceMappingURL=spending-controller.js.map