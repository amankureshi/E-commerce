// For add item to cart
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};
//Fot Delete item From Cart
export const delCart = (product) => {
  return {
    type: "DELITEM",
    playload: product,
  };
};
