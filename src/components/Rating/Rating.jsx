import React from 'react';
import './rating.scss';

const Rating = ({ productRating }) => {
  const randomNumberOfPeople = Math.floor(Math.random() * 10 + 5);

  return (
    <div className="rating-container">
      {randomNumberOfPeople} people rate this product {productRating}
    </div>
  );
};

export default Rating;
