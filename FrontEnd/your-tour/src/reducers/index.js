import { combineReducers } from "redux";

import restaruantReducer from "../reducers/restaurantReducer"
import barReducer from "../reducers/barReducer"
import attractionsReducer from "../reducers/attractionsReducer"

export default combineReducers({
    restaruants: restaruantReducer,
    bars: barReducer,
    attractions: attractionsReducer
})