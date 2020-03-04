import axiosWithAuth from "../React-II-Components/Authorization/axiosWithAuth";
import { ADDTRIP_START, ADDTRIP_SUCCESS, ADDTRIP_FAILURE } from "../actions";

export const addTrip = state => dispatch => {
    console.log("state", state);
    dispatch({ type: ADDTRIP_START });
    return axiosWithAuth()
        .post("https://kids-fly-2.herokuapp.com/api/users/parent/myTrips")
        .then(res => {
            console.log(res);
            dispatch({ type: ADDTRIP_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: ADDTRIP_FAILURE, payload: err });
        });
};