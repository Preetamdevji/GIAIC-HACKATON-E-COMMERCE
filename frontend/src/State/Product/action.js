import {
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
} from "./actionType";
import { api } from "../../config/api_config";


export const findProducts = (reqData) => async (dispatch) => {
  // console.log('Find Products: ', reqData);
  dispatch({ type: FIND_PRODUCTS_REQUEST });
  const {
    colors,
    category,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    sort,
    stock,
    pageNumber,
    pageSize,
  } = reqData;

  try {
    const {data} = await api.get(`/api/products?color=${colors}&size=${sizes}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&sort=${sort}&stock=${stock}&pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
      // console.log("data", data);
    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
  }
};

export const findProductsById = (reqData) => async(dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  const { productId } = reqData;
    // console.log("productId", productId);
    // console.log("reqdata",reqData);
  try {
    const {data} = await api.get(`api/products/id/${productId}`);
    // console.log("data", data);
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
  }
};
