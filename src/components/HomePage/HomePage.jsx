import React, { useState, useEffect } from 'react';
import getProducts from '../../util/getProducts';

const HomePage = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    getProducts().then((e) => setProducts(e));
  }, []);

  const fetchProducts = () => {
    return (
      <div>
        {products
          ? products.map((e) => (
              <ul key={e.id}>
                <li className="product-listitem">{e.category}</li>
                <li className="product-listitem">{e.id}</li>
                <li className="product-listitem">{e.title}</li>
                <li className="product-listitem">{e.price}</li>
                <li className="product-listitem">
                  <img src={e.img} alt="product" />
                </li>
                <li className="product-listitem">{e.description}</li>
              </ul>
            ))
          : null}
      </div>
    );
  };

  return <>{fetchProducts()}</>;
};

export default HomePage;
