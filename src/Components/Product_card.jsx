import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink, useParams } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

const Product_card = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch(); // Get the dispatch function

  const addProduct = (product) => {
    dispatch(addCart(product)); // Dispatch the addCart action with the product
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={70} />
          <Skeleton height={25} width={150} />
          <Skeleton height={150} />
          <div className="d-flex gap-2">
            <Skeleton height={50} width={100} />
            <Skeleton height={50} width={100} />
          </div>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="row">
          <div className="col-md-6">
            <img
              className="product-image"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="col-md-6 col-sm-12 col-lg-6">
            <h4 className="text-uppercase text-black-50">{product.category}</h4>
            <h1 className="display-5">{product.title}</h1>
            <p className="lead">
              Rating {product.rating && product.rating.rate}
              <i className="fa fa-star"></i>
            </p>
            <h3 className="display-6 fw-bold my-4">${product.price}</h3>
            <p className="lead description-lead">{product.description}</p>
            <div className="add_card_btn d-flex gap-3">
              <button
                className="btn btn-outline-dark text-white px-4 py-2 product-btn"
                onClick={() => addProduct(product)}
              >
                Add to Cart
              </button>
              <NavLink
                to="/cart"
                className="btn btn-dark text-white px-4 py-2 product-btn"
              >
                Go to Cart
              </NavLink>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product_card;
