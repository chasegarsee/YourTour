import {
    GET_RESTAURANTS_START, GET_RESTAURANTS_SUCCESS, GET_RESTAURANTS_FAILURE
} from "../actions"

const initialState = {
    restaurantData: [],
    getRestaruantsStart: false,
    getRestaruantsSuccess: false,
    getRestaruantsFailure: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_RESTAURANTS_START:
            return {
                ...state,
                error: "",
                getRestaruantsStart: true,
                getRestaruantsSuccess: false,
                getRestaruantsFailure: false
            }
        case GET_RESTAURANTS_SUCCESS:
            return {
                ...state,
                getRestaruantsStart: false,
                getRestaruantsSuccess: true,
                getRestaruantsFailure: false,
                restaurantData: action.payload
            }
        case GET_RESTAURANTS_FAILURE:
            return {
                ...state,
                getRestaruantsStart: false,
                getRestaruantsSuccess: false,
                getRestaruantsFailure: true,
                error: action.payload
            }
        default:
            return state
    }

}