import React from 'react';
import './product.scss';

const Product = ({ product }) => {
  return (
    <ul key={product.id} className="product-container">
      <li className="product-listitem">
        <img height="200px" src={product.image} alt="product" />
      </li>
      <ul className="product-misc">
        {/* <li className="product-listitem">{product.category}</li> */}
        {/* <li className="product-listitem">{product.id}</li> */}
        <li className="product-listitem">{product.title}</li>
        <li className="product-listitem">{product.price}</li>
        <li className="product-listitem product-description">
          {product.description}
        </li>
      </ul>
    </ul>
  );
};

export default Product;
