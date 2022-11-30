"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spending = void 0;
const mongoose_1 = require("mongoose");
const SpendingSchema = new mongoose_1.Schema({
    name: String,
    description: String,
    classify: Boolean
});
const Spending = (0, mongoose_1.model)('Spending', SpendingSchema);
exports.Spending = Spending;
//# sourceMappingURL=spending.js.map