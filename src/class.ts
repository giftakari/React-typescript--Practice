import {myProduct as Product, OurTable} from './interface'


//OurTable.unitPrice

class Products{
   public name: string;
   public unitPrice : number
}

const tTable = new Products();

tTable.name ="Table";
tTable.unitPrice =500;


class COrderDetail {
  public product: Products;
  public quantity: number;

 public getTotal(discount: number): number {
    const priceWithoutDiscount = this.product.unitPrice * this.quantity;
    const discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;
  }
}


interface IOrderDetail {
  product: Product;
  quantity: number;
  getTotal(discount: number): number;
}

class testOrderDetail implements IOrderDetail {
  //product: Product;
 // quantity: number;

  constructor(public product: Products, public quantity: number=1){
      this.product = product;
      this.quantity = quantity
  }
  getTotal(discount: number): number {
    const priceWithoutDiscount = this.product.unitPrice *  
     this.quantity;
    const discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;
  }
}

const orderDetail = new testOrderDetail(OurTable);

// super keyword
class classProduct {
  constructor(public name: string, public unitPrice: number) {
  }
}

interface IDiscountCode {
  code: string;
  percentage: number;
}

class ProductWithDiscountCodes extends classProduct {
  constructor(public name: string, public unitPrice: number) {
super(name, unitPrice);
  }
  discountCodes: IDiscountCode[];
}

abstract class abstractProduct {
  name: string;
  unitPrice: number;
  abstract delete(): void;
}


class Food extends abstractProduct{
    deleted: boolean;
    constructor(public bestBefore: Date){
        super()
    }
    delete(){
        this.deleted=false;
    }

}

class getProduct {
  name: string;

  private _unitPrice: number;
  get unitPrice(): number {
    return this._unitPrice || 0;
  }
  set unitPrice(value: number) {
    if (value < 0) {
      value = 0;
    }
    this._unitPrice = value;
  }
}

class staticOrderDetail {
  product: Product;
  quantity: number;

static getTotal(unitPrice: number, discount: number, quantity:number): number {
    const priceWithoutDiscount = unitPrice * quantity;
    const discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;
  }
}