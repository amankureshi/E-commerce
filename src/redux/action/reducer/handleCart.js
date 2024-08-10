const cart = [];
const handleCart = (state = cart, action) => {
  const product = action.payload;
  //console.log(product.);

  switch (action.type) {
    case "ADDITEM":
      // Check if the product is already in the cart
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        // Increase the quantity if it already exists
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }

    case "DELITEM":
      const exist1 = state.find((x) => x.id === product);
      // If the item does not exist in the cart, return the current state
      if (!exist1) {
        return state;
      }

      if (exist1.qty) {
        // Remove the item from the cart if the quantity is 1
        return state.filter((x) => x.id !== product);
      } else {
        // Decrease the quantity if it's greater than 1
        return state.map((x) =>
          x.id === product ? { ...x, qty: x.qty - 1 } : x
        );
      }

    default:
      return state;
  }
};

export default handleCart;
