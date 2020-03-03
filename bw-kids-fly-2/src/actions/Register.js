import axios from "axios";
import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE } from "./index";

export const addUser = user => dispatch => {
    console.log("Add User", user);
    dispatch({ type: REGISTER_START });
    return axios
        //This link is for parent register
        .post("https://kids-fly-2.herokuapp.com/api/auth/register-parent", user)
        .then(res => {
            console.log("RESULT", res);

            dispatch({ type: REGISTER_SUCCESS, payload: user });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: REGISTER_FAILURE, payload: user });
        });
};

export const addAssistant = assistant => dispatch => {
    console.log("Add assistant", assistant);
    dispatch({ type: REGISTER_START });
    return axios
        //This is link for assistant register
        .post("https://kids-fly-2.herokuapp.com/api/auth/register-assistant", assistant)
        .then(res => {
            console.log("RESULT", res);
            dispatch({ type: REGISTER_SUCCESS, payload: assistant });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: REGISTER_FAILURE, payload: assistant });
        });
};