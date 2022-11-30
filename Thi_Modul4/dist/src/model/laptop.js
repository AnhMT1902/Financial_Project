"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Laptop = void 0;
const mongoose_1 = require("mongoose");
const LaptopSchema = new mongoose_1.Schema({
    name: String,
    price: Number,
    IdBrand: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Brand'
    },
    quantity: Boolean
});
const Laptop = (0, mongoose_1.model)('Laptop', LaptopSchema);
exports.Laptop = Laptop;
//# sourceMappingURL=laptop.js.map