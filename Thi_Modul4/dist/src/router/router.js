"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_router_1 = require("./user-router");
const wallet_router_1 = require("./wallet-router");
const spending_router_1 = require("./spending-router");
const detail_router_1 = require("./detail-router");
exports.router = (0, express_1.Router)();
exports.router.use('/user', user_router_1.userRouter);
exports.router.use('/wallet', wallet_router_1.walletRouter);
exports.router.use('/spending', spending_router_1.spendingRouter);
exports.router.use('/detail', detail_router_1.detailRouter);
//# sourceMappingURL=router.js.map