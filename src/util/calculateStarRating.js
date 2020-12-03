const calculateStarRating = (
  productRating = 1,
  fullRateNumber = 1,
  halfRateNumber = 0.5
) => {
  if (productRating >= fullRateNumber) return 'fas fa-star';
  else if (productRating >= halfRateNumber) return 'fas fa-star-half-alt';
  else return 'far fa-star';
};

export default calculateStarRating;
