import getProducts from "../../util/getProducts";
import productsFetchUrl from "../../util/productsFetchUrl";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../constants/productConstants";

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
      payload:
        error.response && error.response.products.message
          ? error.response.products.message
          : error.message,
    });
  }
};
