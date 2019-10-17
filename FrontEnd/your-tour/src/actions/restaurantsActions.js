import axios from "axios";
import { BASE_URL } from "../config"


export const GET_RESTAURANTS_START = "GET_RESTAURANTS_START";
export const GET_RESTAURANTS_SUCCESS = "GET_RESTAURANTS_SUCCESS";
export const GET_RESTAURANTS_FAILURE = "GET_RESTAURANTS_FAILURE";

export const getRestaurants = () => dispatch => {
    dispatch({ type: GET_RESTAURANTS_START });
    return axios.get(`${BASE_URL}/restaurants/`, {
        headers: {
            "Content-Type": "application.json",
        }
    })
        .then(res => {
            dispatch({ type: GET_RESTAURANTS_SUCCESS, payload: res.data });
            console.log(res.data)
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: GET_RESTAURANTS_FAILURE, payload: err });
        });
}

