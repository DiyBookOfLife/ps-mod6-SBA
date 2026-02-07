const API = "https://dummyjson.com/products";

export interface ProductAPIResponse {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  category: string;
}


export async function fetchProducts() {
  try {
    const response = await fetch(API);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();

    return data.products;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
}
