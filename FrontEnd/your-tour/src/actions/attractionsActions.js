import axios from "axios";
import { BASE_URL } from "../config";

export const GET_ATTRACTIONS_START = "GET_ATTRACTIONS_START";
export const GET_ATTRACTIONS_SUCCESS = "GET_ATTRACTIONS_SUCCESS";
export const GET_ATTRACTIONS_FAILURE = "GET_ATTRACTIONS_FAILURE";

export const getAttractions = () => dispatch => {
  dispatch({ type: GET_ATTRACTIONS_START });
  return axios
    .get(`${BASE_URL}/attractions/`, {
      headers: {
        "Content-Type": "application.json"
      }
    })
    .then(res => {
      dispatch({ type: GET_ATTRACTIONS_SUCCESS, payload: res.data });
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: GET_ATTRACTIONS_FAILURE, payload: err });
    });
};
