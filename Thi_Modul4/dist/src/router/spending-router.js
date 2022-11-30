"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.spendingRouter = void 0;
const express_1 = require("express");
const spending_controller_1 = __importDefault(require("../controller/spending-controller"));
exports.spendingRouter = (0, express_1.Router)();
exports.spendingRouter.get('', spending_controller_1.default.getAll);
exports.spendingRouter.post('/create', spending_controller_1.default.addSpending);
exports.spendingRouter.delete('/delete/:id', spending_controller_1.default.deleteSpending);
exports.spendingRouter.get('/edit/:id', spending_controller_1.default.editSpending);
//# sourceMappingURL=spending-router.js.map