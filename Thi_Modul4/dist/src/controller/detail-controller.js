"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const detail_service_1 = __importDefault(require("../service/detail-service"));
class DetailController {
    constructor() {
        this.showDetail = async (req, res) => {
            return await detail_service_1.default.getAll(req, res);
        };
        this.creatDetail = async (req, res) => {
            return await detail_service_1.default.creatDetail(req, res);
        };
        this.deleteDetail = async (req, res) => {
            return await detail_service_1.default.deleteDetail(req, res);
        };
    }
}
exports.default = new DetailController();
//# sourceMappingURL=detail-controller.js.map