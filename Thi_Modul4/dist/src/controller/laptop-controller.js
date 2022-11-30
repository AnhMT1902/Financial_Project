"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaptopController = void 0;
const laptop_service_1 = __importDefault(require("../service/laptop-service"));
class LaptopController {
    constructor() {
        this.getAll = async (req, res) => {
            await laptop_service_1.default.findAll(req, res);
        };
        this.addLaptop = async (req, res) => {
            await laptop_service_1.default.addLaptop(req, res);
        };
        this.deleteLaptop = async (req, res) => {
            await laptop_service_1.default.deleteLaptop(req, res);
        };
        this.editLaptop = async (req, res) => {
            await laptop_service_1.default.editLaptop(req, res);
        };
        this.findLapByName = async (req, res) => {
            await laptop_service_1.default.findLaptopByName(req, res);
        };
        this.findLapByBrand = async (req, res) => {
            await laptop_service_1.default.findLaptopByBrand(req, res);
        };
    }
}
exports.LaptopController = LaptopController;
exports.default = new LaptopController();
//# sourceMappingURL=laptop-controller.js.map