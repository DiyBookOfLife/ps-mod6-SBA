class Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  category: string;

  constructor(
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    category: string,
  ) {
    this.id = id;
    ((this.title = title),
      (this.description = description),
      (this.price = price),
      (this.discountPercentage = discountPercentage),
      (this.category = category));
  }
  getPriceWithDiscount(): number {
    const discountAmount = (this.price * this.discountPercentage) / 100;
    return this.price - discountAmount;
  }
  displayDetails() {
    // can use type 'void' due to no return
    console.log(`Product: ${this.title}`);
    console.log(`Category: ${this.category}`);
    console.log(`Price: $${this.price.toFixed(2)}`);
    console.log(`Discount: ${this.discountPercentage}%`);
    console.log(`Discounted Price: $${this.getPriceWithDiscount().toFixed(2)}`);
    console.log("---------------------------");
  }
}

export default Product;
