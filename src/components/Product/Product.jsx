import React from "react";
import PriceTag from "../PriceTag/PriceTag";
import Rating from "../Rating/Rating";
import "./product.scss";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="product-container">
      <Link
        className="product-listitem product-link"
        to={`/products/${product._id}`}
      >
        <img height="200px" src={product.image} alt="product" />
      </Link>
      <ul className="product-misc">
        {/* <li className="product-listitem">{product.category}</li> */}
        {/* <li className="product-listitem">{product.id}</li> */}
        <Link
          className="product-listitem product-link"
          to={`/products/${product._id}`}
        >
          <li className="product-listitem">{product.name}</li>
        </Link>
        {/* <li className="product-listitem product-description">
          {product.description}
        </li> */}
        <Rating
          productRating={product.rating}
          numberOfPeople={product.numReviews}
        />
        <PriceTag price={product.price} />
      </ul>
    </div>
  );
};

export default Product;
