
type Product= {
 readonly name: string;
  unitPrice: number;
}




// Table products
 const table: Product = {
  name: "Table",
  unitPrice: 500
}


// Order details
type OrderDetail= {
  product: Product;
  quantity: number;
  dateAdded? :Date,
getTotal(discount?: number): number;
}


// Table order
const tableOrder: OrderDetail = {
  product: table,
  quantity: 1,
  getTotal(discountPercentage: number): number {
    const priceWithoutDiscount = this.product.unitPrice * this.quantity;
    const discountAmount = priceWithoutDiscount * discountPercentage;
    return (priceWithoutDiscount - discountAmount);
  }
};



interface DiscountCode {
code: string,
percentage: number
}

interface ProductWithDiscount extends Product{
    discountCodes: DiscountCode[]
}

export {Product as myProduct, table as OurTable}