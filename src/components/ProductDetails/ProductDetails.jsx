import React, { useEffect, useState } from 'react';
// import Rating from '../Rating/Rating';
import getProductById from '../../util/getProductById';
import productsFetchUrl from '../../util/productsFetchUrl';

const ProductDetails = ({ match }) => {
  const { id } = match.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    let isMounted = true;
    getProductById(window.fetch, productsFetchUrl, id)
      .then((item) => {
        if (isMounted) setProduct(item);
      })
      .catch((err) => console.error(err));

    return () => {
      isMounted = false;
    };
  }, [id]);

  return (
    <div>
      <p>Product Details</p>
      <div data-testid={'product-title'}>
        {product ? product.title : 'Loading..'}
      </div>
      {/* <Rating numberOfPeople={5} productRating={4} starColor={'purple'} /> */}
    </div>
  );
};

export default ProductDetails;
