import React from 'react';
import './price-tag.scss';

const PriceTag = ({ price }) => {
  return <li className="product-listitem product-price price-tag">{price}$</li>;
};

export default PriceTag;
