import React from 'react';
import './rating.scss';

const Rating = ({ productRating, numberOfPeople }) => {
  const calculateStarRate = (productRating, fullRateNumber, halfRateNumber) => {
    if (productRating >= fullRateNumber) return 'fas fa-star';
    else if (productRating >= halfRateNumber) return 'fas fa-star-half-alt';
    else return 'far fa-star';
  };
  return (
    <div className="rating-container">
      <span>
        <i className={calculateStarRate(productRating, 1, 0.5)}></i>
      </span>
      <span>
        <i className={calculateStarRate(productRating, 2, 1.5)}></i>
      </span>
      <span>
        <i className={calculateStarRate(productRating, 3, 2.5)}></i>
      </span>
      <span>
        <i className={calculateStarRate(productRating, 4, 3.5)}></i>
      </span>
      <span>
        <i className={calculateStarRate(productRating, 5, 4.5)}></i>
      </span>
    </div>
  );
};

export default Rating;
