import Product from './models/Product.js';
import { fetchProducts } from './services/apiService.js';
import { calculateTax } from './utils/taxCalculator.js';
import { handleError, ValidationError } from './utils/errorHandler.js';

async function main() {
  try {
    const productData = await fetchProducts();

    if (!productData || productData.length === 0) {
      throw new ValidationError('No products returned from API');
    }

    const products = productData.map(
      (item: any) =>
        new Product(
          item.id,
          item.title,
          item.description,
          item.price,
          item.discountPercentage,
          item.category
        )
    );

    products.forEach((product: Product) => {
      product.displayDetails();

      const taxAmount = calculateTax(
        product.getPriceWithDiscount(),
        product.category
      );

      console.log(`Tax: $${taxAmount.toFixed(2)}`);
      console.log('===============================');
    });
  } catch (error) {
    handleError(error);
  }
}

main();