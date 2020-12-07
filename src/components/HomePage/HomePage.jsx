import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { listProducts } from "../../redux/actions/productActions";

import Product from "../Product/Product";

import "./homepage.scss";

const HomePage = () => {
  const products = [];

  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;

    dispatch(listProducts());
    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  return (
    <div className="homepage-container" data-testid="home-page">
      {products
        ? products.map((e) => <Product key={e._id} product={e} />)
        : "Loading.."}
    </div>
  );
};

export default HomePage;
