"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controller/user-controller"));
const auth_1 = require("../middleware/auth");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post('/login', user_controller_1.default.loginUser);
exports.userRouter.post('/register', user_controller_1.default.register);
exports.userRouter.use(auth_1.auth);
exports.userRouter.put('/editUser/:id', user_controller_1.default.uploadAccount);
exports.userRouter.put('/editPassword/:id', user_controller_1.default.uploadPassword);
exports.userRouter.get('/infoUser/:id', user_controller_1.default.getInfo);
//# sourceMappingURL=user-router.js.map