import {
  GET_SUCCESSFUL,
  GET_SUCCESSFUL_SUCCESS,
  GET_SUCCESSFUL_FAILURE,
} from "../actions/successfulOrderAction";

const initialState = {
  successfulData: [],
  loading: false,
  hasError: false,
};

function successfulOrderReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SUCCESSFUL:
      return { ...state, loading: true };
    case GET_SUCCESSFUL_SUCCESS:
      return {
        ...state,
        successfulData: action.payload,
        loading: false,
        hasError: false,
      };
    case GET_SUCCESSFUL_FAILURE:
      return { ...state, loading: false, hasError: true };
    default:
      return state;
  }
}
export default successfulOrderReducer
