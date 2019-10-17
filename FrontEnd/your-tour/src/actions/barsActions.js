import axios from "axios";
import { BASE_URL } from "../config"


export const GET_BARS_START = "GET_BARS_START";
export const GET_BARS_SUCCESS = "GET_BARS_SUCCESS";
export const GET_BARS_FAILURE = "GET_BARS_FAILURE";

export const getBars = () => dispatch => {
    dispatch({ type: GET_BARS_START });
    return axios.get(`${BASE_URL}/bars/`, {
        headers: {
            "Content-Type": "application.json",
        }
    })
        .then(res => {
            dispatch({ type: GET_BARS_SUCCESS, payload: res.data });
            console.log(res.data)
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: GET_BARS_FAILURE, payload: err });
        });
}
