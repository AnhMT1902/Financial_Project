"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../model/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middleware/auth");
class AccountService {
    constructor() {
        this.addAccount = async (req, res) => {
            let user = req.body;
            user.password = await bcrypt_1.default.hash(user.password, 10);
            let userFind = await user_1.User.findOne({
                username: user.username
            });
            if (userFind) {
                return res.status(201).json({
                    message: "Account da ton tai!!!",
                    check: false
                });
            }
            else {
                user = await user_1.User.create(user);
                return res.status(201).json({
                    message: "Success",
                    check: true,
                });
            }
        };
        this.loginAccount = async (req, res) => {
            let user = req.body;
            let userFind = await user_1.User.findOne({
                username: user.username
            });
            if (!userFind) {
                return res.status(201).json({
                    message: "Error User or Password!!!"
                });
            }
            else {
                let comparePassword = await bcrypt_1.default.compare(user.password, userFind.password);
                if (!comparePassword) {
                    return res.status(201).json({
                        message: "Error User or Password!!!"
                    });
                }
                else {
                    let payload = {
                        idUser: userFind._id,
                        username: userFind.username
                    };
                    let token = await jsonwebtoken_1.default.sign(payload, auth_1.SECRET, {
                        expiresIn: 36000
                    });
                    return res.status(200).json({
                        token: token,
                        message: "Success!!!",
                        idUser: userFind._id
                    });
                }
            }
        };
        this.editAccount = async (req, res) => {
            let info = req.body;
            let id = req.params.id;
            await user_1.User.updateMany({ _id: id }, { $set: info });
            return res.status(201).json({
                message: "Edit Success!!!"
            });
        };
        this.editPassword = async (req, res) => {
            let password = req.body;
            let id = req.params.id;
            await user_1.User.updateOne({ _id: id }, { $set: { password: password } });
            return res.status(201).json({
                message: "Upload Password Success!!!"
            });
        };
        this.getInfoUser = async (req, res) => {
            let id = req.params.id;
            let infoUser = await user_1.User.findById({ _id: id });
            console.log(infoUser._id, typeof (infoUser));
            return res.status(200).json(infoUser);
        };
    }
}
exports.default = new AccountService();
//# sourceMappingURL=use-service.js.map