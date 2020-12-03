import calculateStarRating from '../util/calculateStarRating';

it('should return `fas fa-star`', () => {
  const rateString = calculateStarRating(1, 1, 0.5);
  expect(rateString).toEqual('fas fa-star');
});

it('should return `far fa-star`', () => {
  const rateString = calculateStarRating(4, 5, 4.5);
  expect(rateString).toEqual('far fa-star');
});

it('should return `fas fa-star-half-alt`', () => {
  const rateString = calculateStarRating(1.5, 2, 1.5);
  expect(rateString).toEqual('fas fa-star-half-alt');
});

it('should return `fas fa-star` when no parameters given', () => {
  const rateString = calculateStarRating();
  expect(rateString).toEqual('fas fa-star');
});
