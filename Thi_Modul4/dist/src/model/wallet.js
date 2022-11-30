"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
const mongoose_1 = require("mongoose");
const WalletSchema = new mongoose_1.Schema({
    name: String,
    money: Number,
    idUser: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    }
});
const Wallet = (0, mongoose_1.model)('Wallet', WalletSchema);
exports.Wallet = Wallet;
//# sourceMappingURL=wallet.js.map