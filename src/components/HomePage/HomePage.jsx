import React, { useState, useEffect } from 'react';
import getProducts from '../../util/getProducts';
import './homepage.scss';
const HomePage = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    getProducts().then((e) => setProducts(e));
  }, []);

  const fetchProducts = () => {
    return products.map((e) => (
      <ul key={e.id} className="product-container">
        <li className="product-listitem">
          <img height="200px" src={e.image} alt="product" />
        </li>
        <ul className="product-misc">
          <li className="product-listitem">{e.category}</li>
          <li className="product-listitem">{e.id}</li>
          <li className="product-listitem">{e.title}</li>
          <li className="product-listitem">{e.price}</li>
          <li className="product-listitem">{e.description}</li>
        </ul>
      </ul>
    ));
  };

  return <>{products ? fetchProducts() : null}</>;
};

export default HomePage;
