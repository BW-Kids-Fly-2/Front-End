import { FLIGHT_START, FLIGHT_SUCCESS, FLIGHT_FAILURE } from './index';
import {axiosWithAuth} from '../React-II-Components/Authorization/axiosWithAuth';

export const getTrip = () => dispatch => {
  dispatch({ type: FLIGHT_START });
  return axiosWithAuth()
  .get(' https://kids-fly-2.herokuapp.com/api/users/parent/myTrips')
  .then(res => {
    console.log(res);
    dispatch({ type: FLIGHT_SUCCESS, payload: res.data });
  })
  .catch(err => {
    console.log(err);
    dispatch({ type: FLIGHT_FAILURE, payload: err.data });
  });
};