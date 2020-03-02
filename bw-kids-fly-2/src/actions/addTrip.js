// import axiosWithAuth from "../components/Auth/axiosWithAuth";
// import { ADDTRIP_START, ADDTRIP_SUCCESS, ADDTRIP_FAILURE } from "../actions";

// export const addTrip = state => dispatch => {
//   console.log("state", state);
//   dispatch({ type: ADDTRIP_START });
//   return axiosWithAuth()
//     .post("")
//     .then(res => {
//       console.log(res);
//       dispatch({ type: ADDTRIP_SUCCESS, payload: res.data });
//     })
//     .catch(err => {
//       console.log(err);
//       dispatch({ type: ADDTRIP_FAILURE, payload: err });
//     });
// };