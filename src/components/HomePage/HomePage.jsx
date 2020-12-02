import React, { useState, useEffect } from 'react';
import getProducts from '../../util/getProducts';
import Product from '../Product/Product';
import './homepage.scss';

const HomePage = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    getProducts().then((e) => setProducts(e));
  }, []);

  const fetchProducts = () => {
    return products.map((e) => <Product product={e} />);
  };

  return <>{products ? fetchProducts() : null}</>;
};

export default HomePage;
