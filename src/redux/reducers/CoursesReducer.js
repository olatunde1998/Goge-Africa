import {
  GET_COURSES,
  GET_COURSES_SUCCESS,
  GET_COURSES_FAILURE,
} from "redux/actions/CoursesAction";

export const initialState = {
  courses: [],
  loading: false,
  hasError: false,
};

export default function coursesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COURSES:
      return { ...state, loading: true };
    case GET_COURSES_SUCCESS:
      return { courses: action.payload, loading: false, hasError: false };
    case GET_COURSES_FAILURE:
      return { ...state, loading: false, hasError: true };
    default:
      return state;
  }
}
