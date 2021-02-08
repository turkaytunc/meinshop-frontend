import getProductById from '../../util/getProductById';
import getProducts from '../../util/getProducts';
import productsFetchUrl from '../../util/productsFetchUrl';
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from '../constants/productConstants';

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const products = await getProducts(window.fetch, productsFetchUrl);

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: products,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.response && error.response.products.message ? error.response.products.message : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const product = await getProductById(window.fetch, productsFetchUrl, id);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: product,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response && error.response.products.message ? error.response.products.message : error.message,
    });
  }
};
