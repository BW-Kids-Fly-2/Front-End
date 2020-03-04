import { ADDTRIP_START, ADDTRIP_SUCCESS, ADDTRIP_FAILURE } from "../actions";

const initialState = {
  trips: {},
  isPosting: false,
  posted: false,
  error: ""
};

export const tripReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTRIP_START:
      return {
        ...state,
        isPosting: true,
        error: "",
        posted: false
      };
    case ADDTRIP_SUCCESS:
      return {
        ...state,
        isPosting: false,
        error: "",
        trips: action.payload,
        posted: true
      };
    case ADDTRIP_FAILURE:
      return {
        ...state,
        isPosting: false,
        error: action.payload,
        posted: false
      };
    default:
      return state;
  }
};