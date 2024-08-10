import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delItem } from "../redux/action";

const Cart = () => {
  const cart = useSelector((state) => state.handleCart);

  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    //console.log(productId, qty);
    dispatch(delItem(productId));
  };

  return (
    <div className="container my-5 table-responsive">
      <h2 className="mb-4">Your Cart</h2>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center text-dark h4">
                Your Cart is Empty
              </td>
            </tr>
          ) : (
            cart.map((product, index) => (
              <tr key={product.id}>
                <th scope="row">{index + 1}</th>
                <td>
                  <img src={product.image} className="cart_image" />
                </td>
                <td className="text-dark">${product.price}</td>
                <td className="text-dark">{product.qty}</td>
                <td className="text-dark">
                  ${(product.price * product.qty).toFixed(2)}
                </td>
                <td>
                  <button
                    className="btn"
                    onClick={() => handleRemoveFromCart(product.id)}
                  >
                    <i className="fa-solid fa-trash text-danger fs-4"></i>
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
