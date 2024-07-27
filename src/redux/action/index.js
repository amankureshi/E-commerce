// For add item to cart

export const addCart = () => {
  return {
    type: "ADITEM",
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
