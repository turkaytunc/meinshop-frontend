import React, { useState, useEffect } from 'react';
import getProducts from '../../util/getProducts';
import Product from '../Product/Product';
import './homepage.scss';

const HomePage = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    getProducts().then((e) => setProducts(e));
  }, []);

  return (
    <>
      {products
        ? products.map((e) => <Product key={e.id} product={e} />)
        : null}
    </>
  );
};

export default HomePage;
