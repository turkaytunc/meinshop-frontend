import React, { useEffect, useState } from 'react';
import Rating from '../Rating/Rating';
import getProductById from '../../util/getProductById';
import productsFetchUrl from '../../util/productsFetchUrl';

const ProductDetails = ({ match }) => {
  const { id } = match.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      let item;

      try {
        item = await getProductById(window.fetch, productsFetchUrl, id);
        setProduct(item);
      } catch (error) {
        console.error(error, '--> Cant fetch product!');
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <div>
      <p>Product Details</p>
      <div>{product && product.title}</div>
      {/* <Rating numberOfPeople={5} productRating={4} starColor={'purple'} /> */}
    </div>
  );
};

export default ProductDetails;
