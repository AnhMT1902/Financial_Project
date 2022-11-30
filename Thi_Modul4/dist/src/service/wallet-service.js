"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wallet_1 = require("../model/wallet");
const detail_1 = require("../model/detail");
class WalletService {
    constructor() {
        this.getAllWallet = async (req, res) => {
            let idUser = req.params.id.split(":");
            let wallet = await wallet_1.Wallet.find({ idUser: idUser[1] });
            res.status(200).json(wallet);
        };
        this.addWallet = async (req, res) => {
            let wallet = req.body;
            let check = await this.checkNameWallet(wallet);
            console.log(check);
            if (check) {
                await wallet_1.Wallet.create(wallet);
                return res.status(201).json({
                    message: "Create Wallet Success!!!",
                    check: true
                });
            }
            else {
                return res.status(201).json({
                    message: "Error!!!",
                    check: false
                });
            }
        };
        this.deleteWallet = async (req, res) => {
            let id = req.params.id;
            await wallet_1.Wallet.deleteOne({ _id: id });
            await detail_1.Detail.deleteMany({ idWallet: id });
            return res.status(201).json({
                message: "Delete Success"
            });
        };
        this.editWallet = async (req, res) => {
            let id = req.params.id;
            let newWallet = req.body;
            await wallet_1.Wallet.updateOne({ _id: id }, { $set: newWallet });
            return res.status(201).json({
                message: "Edit Success"
            });
        };
        this.findWalletByName = async (req, res) => {
            let walletName = req.body.name;
            let arrWallet = await wallet_1.Wallet.find({ 'name': { '$regex': walletName } });
            return res.status(201).json(arrWallet);
        };
        this.checkNameWallet = async (wallet) => {
            let wallets = await wallet_1.Wallet.find({ idUser: wallet.idUser, name: wallet.name });
            console.log(wallets);
            if (wallets.length === 0) {
                return true;
            }
            else
                return false;
        };
        this.showWalletById = async (req, res) => {
            let idWallet = req.params.id;
            let wallet = await wallet_1.Wallet.findOne({ _id: idWallet });
            let money = +await this.calSurplus(req, res, idWallet);
            await wallet_1.Wallet.updateOne({ _id: idWallet }, { $set: { money: money } });
            return res.status(201).json(wallet);
        };
        this.calSurplus = async (req, res, idWallet) => {
            let revenue = 0;
            let spend = 0;
            let arrDetail = await detail_1.Detail.find({ idWallet: idWallet }).populate('Spending', "classify");
            arrDetail.forEach((item) => {
                if (item.Spending.classify === true) {
                    revenue += item.money;
                }
                else {
                    spend += item.money;
                }
            });
            return revenue - spend;
        };
    }
}
exports.default = new WalletService();
//# sourceMappingURL=wallet-service.js.map