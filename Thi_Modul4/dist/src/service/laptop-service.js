"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const laptop_1 = require("../model/laptop");
class LaptopService {
    constructor() {
        this.findAll = async (req, res) => {
            let spending = await laptop_1.Laptop.find();
            return res.status(200).json(spending);
        };
        this.addLaptop = async (req, res) => {
            let laptop = req.body;
            laptop = await laptop_1.Laptop.create(laptop);
            return res.status(201).json({
                message: "Success"
            });
        };
        this.deleteLaptop = async (req, res) => {
            let id = req.params.id;
            await laptop_1.Laptop.deleteOne({ _id: id });
            return res.status(201).json({
                message: "Delete Success"
            });
        };
        this.editLaptop = async (req, res) => {
            let id = req.params.id;
            let newLaptop = req.body;
            await laptop_1.Laptop.updateOne({ _id: id }, { $set: newLaptop });
            return res.status(201).json({
                message: "Edit Success"
            });
        };
        this.findLaptopByName = async (req, res) => {
            let laptopName = req.body.name;
            let arrLaptop = await laptop_1.Laptop.find({ 'name': { '$regex': laptopName } });
            return res.status(201).json(arrLaptop);
        };
        this.findLaptopByBrand = async (req, res) => {
            let laptopBrand = req.body.brand;
            let arrLaptop = await laptop_1.Laptop.find({ 'brand': { '$regex': laptopBrand } });
            return res.status(201).json(arrLaptop);
        };
    }
}
exports.default = new LaptopService();
//# sourceMappingURL=laptop-service.js.map