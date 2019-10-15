import { combineReducers } from "redux";

import restaruantReducer from "../reducers/restaurantReducer"

export default combineReducers({
    restaruants: restaruantReducer
})