export async function getProducts() {
  const products = await fetch("/produtos.json").then((response) =>
    response.json()
  );
  return products;
}
