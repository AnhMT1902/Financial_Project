"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.detailRouter = void 0;
const express_1 = require("express");
const detail_controller_1 = __importDefault(require("../controller/detail-controller"));
exports.detailRouter = (0, express_1.Router)();
exports.detailRouter.post("/create/:id", detail_controller_1.default.creatDetail);
exports.detailRouter.get("/show/:id", detail_controller_1.default.showDetail);
exports.detailRouter.delete("/delete/:id", detail_controller_1.default.deleteDetail);
//# sourceMappingURL=detail-router.js.map