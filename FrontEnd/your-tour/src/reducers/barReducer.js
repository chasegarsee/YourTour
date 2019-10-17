import {
    GET_BARS_START, GET_BARS_SUCCESS, GET_BARS_FAILURE
} from "../actions"

const initialState = {
    barData: [],
    getBarsStart: false,
    getBarsSuccess: false,
    getBarsFailure: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_BARS_START:
            return {
                ...state,
                error: "",
                getBarsStart: true,
                getBarsSuccess: false,
                getBarsFailure: false
            }
        case GET_BARS_SUCCESS:
            return {
                ...state,
                getBarsStart: false,
                getBarsSuccess: true,
                getBarsFailure: false,
                barData: action.payload
            }
        case GET_BARS_FAILURE:
            return {
                ...state,
                getBarsStart: false,
                getBarsSuccess: false,
                getBarsFailure: true,
                error: action.payload
            }
        default:
            return state
    }

}