"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.walletRouter = void 0;
const express_1 = require("express");
const wallet_controller_1 = __importDefault(require("../controller/wallet-controller"));
const auth_1 = require("../middleware/auth");
exports.walletRouter = (0, express_1.Router)();
exports.walletRouter.use(auth_1.auth);
exports.walletRouter.get('/showAll/:id', wallet_controller_1.default.showWallet);
exports.walletRouter.get('/show/:id', wallet_controller_1.default.showWalletById);
exports.walletRouter.post('/create', wallet_controller_1.default.createWallet);
exports.walletRouter.delete('/delete/:id', wallet_controller_1.default.deleteWallet);
exports.walletRouter.put('/edit/:id', wallet_controller_1.default.uploadWallet);
exports.walletRouter.get('/find', wallet_controller_1.default.findWalletByName);
//# sourceMappingURL=wallet-router.js.map