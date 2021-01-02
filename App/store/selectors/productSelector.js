export const productsSelector = (id) => {
  return (state) => {
    const shoppings = state.productReducer.shoppings.find((item) => item.id === id) || [];
    return shoppings.products;
  }
};
