import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDER_BY_ID_FAILURE,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
} from "./ActionType";
import { api } from "../../config/api_config";

export const createOrder = (reqData) => async (dispatch) => {
  dispatch({ type: CREATE_ORDER_REQUEST });

  try {
    const { data } = await api.post("/api/orders/", reqData.formData);
    // console.log("reqData",reqData.formData);
    // console.log("data",data);
    if (data._id) {
      reqData.navigate({ search: `step=3&order_id=${data._id}` });
    }
    // console.log("reqData",reqData.formData);
    // console.log("created order - ", data);
    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    // console.log("catch error : ", error);
    dispatch({
      type: CREATE_ORDER_FAILURE,
      payload: error.message,
    });
  }
};

export const getOrderById = (orderId) => async (dispatch) => {
  // console.log("Fetching order by ID:", orderId); // New log to confirm function call
  dispatch({ type: GET_ORDER_BY_ID_REQUEST });

  try {
    const { data }  = await api.get(`/api/orders/${orderId}`);
    // console.log("Order data retrieved:", data); // Original log
    dispatch({ type: GET_ORDER_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    // console.error("Error fetching order by ID:", error); // Use console.error for errors
    dispatch({
      type: GET_ORDER_BY_ID_FAILURE,
      payload: error.message,
    });
  }
};




// export const getOrderById = (orderId) => async (dispatch) => {
//   dispatch({ type: GET_ORDER_BY_ID_REQUEST });

//   try {
//     const { data } = await api.get(`/api/orders/${orderId}`);
  
//     console.log("order by id", data);
//     dispatch({ type: GET_ORDER_BY_ID_SUCCESS, payload: data });
//   } catch (error) {
//     console.log("catch error : ", error);
//     dispatch({
//       type: GET_ORDER_BY_ID_FAILURE,
//       payload: error.message,
//     });
//   }
// };
