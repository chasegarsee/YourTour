import { combineReducers } from "redux";

import restaruantReducer from "../reducers/restaurantReducer"
import barReducer from "../reducers/barReducer"

export default combineReducers({
    restaruants: restaruantReducer,
    bars: barReducer
})