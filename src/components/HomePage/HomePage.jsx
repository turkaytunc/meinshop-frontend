import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { listProducts } from "../../redux/actions/productActions";

import Product from "../Product/Product";

import "./homepage.scss";

const HomePage = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(listProducts());
    }
    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  return (
    <div className="homepage-container" data-testid="home-page">
      {loading
        ? "Loading.."
        : error
        ? "Error"
        : products.map((e) => <Product key={e._id} product={e} />)}
    </div>
  );
};

export default HomePage;
