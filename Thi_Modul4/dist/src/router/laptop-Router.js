"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.laptopRouter = void 0;
const express_1 = require("express");
const laptop_controller_1 = __importDefault(require("../controller/laptop-controller"));
exports.laptopRouter = (0, express_1.Router)();
exports.laptopRouter.get('', laptop_controller_1.default.getAll);
exports.laptopRouter.post('/create', laptop_controller_1.default.addLaptop);
exports.laptopRouter.delete('/delete/:id', laptop_controller_1.default.deleteLaptop);
exports.laptopRouter.put('/edit/:id', laptop_controller_1.default.editLaptop);
exports.laptopRouter.get('/find', laptop_controller_1.default.findLapByName);
exports.laptopRouter.get('/findBrand', laptop_controller_1.default.findLapByBrand);
//# sourceMappingURL=laptop-Router.js.map