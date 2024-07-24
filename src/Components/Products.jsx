import React, { useState, useEffect } from "react";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(response);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return <>Loading...</>;
  };

  const filterProduct = (res) => {
    const updatedList = data.filter((x) => x.category === res);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="top-tabs d-flex justify-content-center pb-5 mb-5">
          <button
            className="btn btn-outline-dark me-2 tab-btn"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2 tab-btn"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2 tab-btn"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2 tab-btn"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2 tab-btn"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </button>
        </div>
        {filter.map((products) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center py-4">
                  <img
                    src={products.image}
                    className="card-img-top"
                    alt={products.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {products.title.substring(0, 12)}...
                    </h5>
                    <p className="card-text">${products.price}</p>
                    <a href="#" className="btn btn-light">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5" id="products">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};
export default Products;
