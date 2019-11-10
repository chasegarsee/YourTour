import {
    GET_ATTRACTIONS_START,
    GET_ATTRACTIONS_SUCCESS,
    GET_ATTRACTIONS_FAILURE,
    ADD_ATTRACTION_START,
    ADD_ATTRACTION_SUCCESS,
    ADD_ATTRACTION_FAILURE
} from "../actions"

const initialState = {
    attractionData: [],
    getAttractionsStart: false,
    getAttractionsSuccess: false,
    getAttractionsFailure: false,
    addingAttraction: false,
    addSuccess: false,
    addFailure: false,
    error: false,
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
        case ADD_ATTRACTION_START:
            return {
                ...state,
                error: false,
                addingAttraction: true
            };
        case ADD_ATTRACTION_SUCCESS:
            return {
                ...state,
                error: false,
                addingAttraction: false,
                addSuccess: true,
                attractionData: action.payload
            };
        case ADD_ATTRACTION_FAILURE:
            return {
                ...state,
                error: action.payload,
                addingAttraction: false,
                addFailure: true
            };
        default:
            return state
    }

}