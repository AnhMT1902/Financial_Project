"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Detail = void 0;
const mongoose_1 = require("mongoose");
const DetailSchema = new mongoose_1.Schema({
    money: Number,
    idWallet: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Wallet'
    },
    Spending: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Spending'
    }
});
const Detail = (0, mongoose_1.model)('Detail', DetailSchema);
exports.Detail = Detail;
//# sourceMappingURL=detail.js.map