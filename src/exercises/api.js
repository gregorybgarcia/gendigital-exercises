const getCarts = async () => {
  const response = await fetch("http://localhost:4002/cart");
  return await response.json();
};

const getProducts = async () => {
  const response = await fetch("http://localhost:4002/products");
  return await response.json();
};

export { getCarts, getProducts };
