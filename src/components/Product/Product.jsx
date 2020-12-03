import React from 'react';
import PriceTag from '../PriceTag/PriceTag';
import Rating from '../Rating/Rating';
import './product.scss';

const Product = ({ product }) => {
  const numberOfPeople = Math.floor(Math.random() * 10) + 1;
  const productRating = Math.random() * 6;

  return (
    <ul className="product-container">
      <li className="product-listitem">
        <img height="200px" src={product.image} alt="product" />
      </li>
      <ul className="product-misc">
        {/* <li className="product-listitem">{product.category}</li> */}
        {/* <li className="product-listitem">{product.id}</li> */}
        <li className="product-listitem">{product.title}</li>
        {/* <li className="product-listitem product-description">
          {product.description}
        </li> */}
        <Rating productRating={productRating} numberOfPeople={numberOfPeople} />
        <PriceTag price={product.price} />
      </ul>
    </ul>
  );
};

export default Product;
