"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaptopController = void 0;
const brand_service_1 = __importDefault(require("../service/brand-service"));
class LaptopController {
    constructor() {
        this.getAll = async (req, res) => {
            await brand_service_1.default.findAll(req, res);
        };
        this.addLaptop = async (req, res) => {
            await brand_service_1.default.addBrand(req, res);
        };
        this.deleteLaptop = async (req, res) => {
            await brand_service_1.default.deleteBrand(req, res);
        };
        this.editLaptop = async (req, res) => {
            await brand_service_1.default.editBrand(req, res);
        };
        this.findLapByName = async (req, res) => {
            await brand_service_1.default.findBrandByName(req, res);
        };
    }
}
exports.LaptopController = LaptopController;
exports.default = new LaptopController();
//# sourceMappingURL=brand-controller.js.map