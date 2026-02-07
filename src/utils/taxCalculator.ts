export function calculateTax(price: number, category: string): number {
  const standardTax = 0.0475;
  const groceryTax = 0.03;

  const tax =
    category.toLowerCase() === "groceries" ? groceryTax : standardTax;

  return price * tax;
}
