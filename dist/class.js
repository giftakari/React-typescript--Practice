"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var interface_1 = require("./interface");
//OurTable.unitPrice
var Products = /** @class */ (function () {
    function Products() {
    }
    return Products;
}());
var tTable = new Products();
tTable.name = "Table";
tTable.unitPrice = 500;
var COrderDetail = /** @class */ (function () {
    function COrderDetail() {
    }
    COrderDetail.prototype.getTotal = function (discount) {
        var priceWithoutDiscount = this.product.unitPrice * this.quantity;
        var discountAmount = priceWithoutDiscount * discount;
        return priceWithoutDiscount - discountAmount;
    };
    return COrderDetail;
}());
var testOrderDetail = /** @class */ (function () {
    //product: Product;
    // quantity: number;
    function testOrderDetail(product, quantity) {
        if (quantity === void 0) { quantity = 1; }
        this.product = product;
        this.quantity = quantity;
        this.product = product;
        this.quantity = quantity;
    }
    testOrderDetail.prototype.getTotal = function (discount) {
        var priceWithoutDiscount = this.product.unitPrice *
            this.quantity;
        var discountAmount = priceWithoutDiscount * discount;
        return priceWithoutDiscount - discountAmount;
    };
    return testOrderDetail;
}());
var orderDetail = new testOrderDetail(interface_1.OurTable);
// super keyword
var classProduct = /** @class */ (function () {
    function classProduct(name, unitPrice) {
        this.name = name;
        this.unitPrice = unitPrice;
    }
    return classProduct;
}());
var ProductWithDiscountCodes = /** @class */ (function (_super) {
    __extends(ProductWithDiscountCodes, _super);
    function ProductWithDiscountCodes(name, unitPrice) {
        var _this = _super.call(this, name, unitPrice) || this;
        _this.name = name;
        _this.unitPrice = unitPrice;
        return _this;
    }
    return ProductWithDiscountCodes;
}(classProduct));
var abstractProduct = /** @class */ (function () {
    function abstractProduct() {
    }
    return abstractProduct;
}());
var Food = /** @class */ (function (_super) {
    __extends(Food, _super);
    function Food(bestBefore) {
        var _this = _super.call(this) || this;
        _this.bestBefore = bestBefore;
        return _this;
    }
    Food.prototype.delete = function () {
        this.deleted = false;
    };
    return Food;
}(abstractProduct));
var getProduct = /** @class */ (function () {
    function getProduct() {
    }
    Object.defineProperty(getProduct.prototype, "unitPrice", {
        get: function () {
            return this._unitPrice || 0;
        },
        set: function (value) {
            if (value < 0) {
                value = 0;
            }
            this._unitPrice = value;
        },
        enumerable: false,
        configurable: true
    });
    return getProduct;
}());
var staticOrderDetail = /** @class */ (function () {
    function staticOrderDetail() {
    }
    staticOrderDetail.getTotal = function (unitPrice, discount, quantity) {
        var priceWithoutDiscount = unitPrice * quantity;
        var discountAmount = priceWithoutDiscount * discount;
        return priceWithoutDiscount - discountAmount;
    };
    return staticOrderDetail;
}());
//# sourceMappingURL=class.js.map