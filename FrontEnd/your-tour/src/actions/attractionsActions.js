import axios from "axios";
import { BASE_URL } from "../config"


export const GET_ATTRACTIONS_START = "GET_ATTRACTIONS_START";
export const GET_ATTRACTIONS_SUCCESS = "GET_ATTRACTIONS_SUCCESS";
export const GET_ATTRACTIONS_FAILURE = "GET_ATTRACTIONS_FAILURE";

export const getAttractions = () => dispatch => {
    dispatch({ type: GET_ATTRACTIONS_START });
    return axios.get(`${BASE_URL}/attractions/`, {
        headers: {
            "Content-Type": "application.json",
        }
    })
        .then(res => {
            dispatch({ type: GET_ATTRACTIONS_SUCCESS, payload: res.data });
            console.log(res.data)
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: GET_ATTRACTIONS_FAILURE, payload: err });
        });
}


export const ADD_ATTRACTION_START = "ADD_ATTRACTION_START"
export const ADD_ATTRACTION_SUCCESS = "ADD_ATTRACTION_SUCCESS"
export const ADD_ATTRACTION_FAILURE = "ADD_ATTRACTION_FAILURE"

export const addAttraction = () => dispatch => {
    dispatch({ type: ADD_ATTRACTION_START });

    return axios.post(`${BASE_URL}/attractions`, {
        headers: {
            "Content-Type": "application.json"
        }
    })
        .then(res => {
            dispatch({ type: ADD_ATTRACTION_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: ADD_ATTRACTION_FAILURE, payload: err })
        })
}