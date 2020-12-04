import React, { useEffect } from 'react';
import Rating from '../Rating/Rating';

const ProductDetails = ({ match }) => {
  const { id } = match.params;
  useEffect(() => {}, []);

  return <div>Product Details</div>;
};

export default ProductDetails;
