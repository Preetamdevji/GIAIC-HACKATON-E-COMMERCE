import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/reducer"
import { customerProductReducer } from "./Product/Reducers";
import { cartReducer } from "./Cart/Reducers";
import { orderReducers } from "./Order/Reducers";
const rootReducers = combineReducers({
    auth:authReducer,
    products:customerProductReducer,
    cart:cartReducer,
    order:orderReducers
})


export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))