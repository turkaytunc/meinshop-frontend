import React, { useState, useEffect } from 'react';
import getProducts from '../../util/getProducts';
import Product from '../Product/Product';
import productsFetchUrl from '../../util/productsFetchUrl';
import './homepage.scss';

const HomePage = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    let isMounted = true;
    async function fetchData() {
      try {
        const items = await getProducts(window.fetch, productsFetchUrl);
        if (isMounted) setProducts(items);
      } catch (error) {
        console.log('Server Error');
      }
    }
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="homepage-container" data-testid="home-page">
      {products
        ? products.map((e) => <Product key={e._id} product={e} />)
        : 'Loading..'}
    </div>
  );
};

export default HomePage;
