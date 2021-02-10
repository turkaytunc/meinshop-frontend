import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '../Rating/Rating';
import './product-details.scss';
import PriceTag from '../PriceTag/PriceTag';
import Loading from '../Loading/Loading';
import { listProductDetails } from '../../redux/actions/productActions';

const ProductDetails = ({ match }) => {
  const { id } = match.params;
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product } = productDetails;

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      dispatch(listProductDetails(id));
    }
    return () => {
      isMounted = false;
    };
  }, [dispatch, id]);

  console.log(product.image);
  return loading ? (
    <Loading />
  ) : (
    <div className="product-details-container">
      <div className="details-img-button">
        <button className="goback-button">
          <a href="/">Go to Home</a>
        </button>
        <img className="product-details-image" src={product.image} alt="product" />
      </div>
      <ul className="product-details-description-container">
        <li data-testid={'product-title'}>{product ? product.name : 'Loading..'}</li>
        <div style={{ margin: '3em 0 1em 0' }}>
          <Rating numberOfPeople={product?.numReviews} productRating={product?.rating} starColor={'purple'} />
        </div>
        <hr />
        <li className="product-details-description">{product?.description}</li>
      </ul>
      <div className="product-details-price">
        <div style={{ listStyle: 'none', minWidth: '100px', marginBottom: '1em' }}>
          <PriceTag price={product?.price} />
        </div>
        <div>In Stock</div>
        <div>
          <button
            style={{
              width: '100%',
              height: '3em',
              marginTop: '2em',
              color: 'purple',
              backgroundColor: 'white',
              border: '1px solid #ccc',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Add to cart <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
