"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wallet_service_1 = __importDefault(require("../service/wallet-service"));
class WalletController {
    constructor() {
        this.showWallet = async (req, res) => {
            return await wallet_service_1.default.getAllWallet(req, res);
        };
        this.createWallet = async (req, res) => {
            return await wallet_service_1.default.addWallet(req, res);
        };
        this.deleteWallet = async (req, res) => {
            return await wallet_service_1.default.deleteWallet(req, res);
        };
        this.uploadWallet = async (req, res) => {
            return await wallet_service_1.default.editWallet(req, res);
        };
        this.findWalletByName = async (req, res) => {
            return await wallet_service_1.default.findWalletByName(req, res);
        };
        this.showWalletById = async (req, res) => {
            return await wallet_service_1.default.showWalletById(req, res);
        };
    }
}
exports.default = new WalletController();
//# sourceMappingURL=wallet-controller.js.map