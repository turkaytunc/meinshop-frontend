import React, { useState, useEffect } from 'react';
import getProducts from '../../util/getProducts';
import Product from '../Product/Product';
import productsFetchUrl from '../../util/productsFetchUrl';
import './homepage.scss';

const HomePage = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const items = await getProducts(window.fetch, productsFetchUrl);
        setProducts(items);
      } catch (error) {
        console.log('Server Error');
      }
    }
    fetchData();
  }, []);

  return (
    <>{products && products.map((e) => <Product key={e.id} product={e} />)}</>
  );
};

export default HomePage;
