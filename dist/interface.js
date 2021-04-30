"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OurTable = void 0;
// Table products
var table = {
    name: "Table",
    unitPrice: 500
};
exports.OurTable = table;
// Table order
var tableOrder = {
    product: table,
    quantity: 1,
    getTotal: function (discountPercentage) {
        var priceWithoutDiscount = this.product.unitPrice * this.quantity;
        var discountAmount = priceWithoutDiscount * discountPercentage;
        return (priceWithoutDiscount - discountAmount);
    }
};
//# sourceMappingURL=interface.js.map