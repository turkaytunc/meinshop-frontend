import React from 'react';
import './rating.scss';
import calculateStarRating from '../../util/calculateStarRating';

const Rating = ({ productRating, numberOfPeople }) => {
  return (
    <div className="rating-container">
      <div className="star-container">
        <span>
          <i className={calculateStarRating(productRating, 1, 0.5)}></i>
        </span>
        <span>
          <i className={calculateStarRating(productRating, 2, 1.5)}></i>
        </span>
        <span>
          <i className={calculateStarRating(productRating, 3, 2.5)}></i>
        </span>
        <span>
          <i className={calculateStarRating(productRating, 4, 3.5)}></i>
        </span>
        <span>
          <i className={calculateStarRating(productRating, 5, 4.5)}></i>
        </span>
      </div>
      <span style={{ marginLeft: '0.3em' }}>
        {numberOfPeople && numberOfPeople} people
      </span>
    </div>
  );
};

export default Rating;
