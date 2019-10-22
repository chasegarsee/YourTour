import {
    GET_ATTRACTIONS_START, GET_ATTRACTIONS_SUCCESS, GET_ATTRACTIONS_FAILURE
} from "../actions"

const initialState = {
    attractionData: [],
    getAttractionsStart: false,
    getAttractionsSuccess: false,
    getAttractionsFailure: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ATTRACTIONS_START:
            return {
                ...state,
                error: "",
                getAttractionsStart: true,
                getAttractionsSuccess: false,
                getAttractionsFailure: false
            }
        case GET_ATTRACTIONS_SUCCESS:
            return {
                ...state,
                getAttractionsStart: false,
                getAttractionsSuccess: true,
                getAttractionsFailure: false,
                attractionData: action.payload
            }
        case GET_ATTRACTIONS_FAILURE:
            return {
                ...state,
                getAttractionsStart: false,
                getAttractionsSuccess: false,
                getAttractionsFailure: true,
                error: action.payload
            }
        default:
            return state
    }

}