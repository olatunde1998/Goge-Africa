import {
  GET_BLOGS,
  GET_BLOGS_SUCCESS,
  GET_BLOGS_FAILURE,
} from "redux/actions/blogAction";

export const initialState = {
  blogs: [],
  loading: false,
  hasError: false,
};

export default function blogsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BLOGS:
      return { ...state, loading: true };
    case GET_BLOGS_SUCCESS:
      return { blogs: action.payload, loading: false, hasError: false };
    case GET_BLOGS_FAILURE:
      return { ...state, loading: false, hasError: true };
    default:
      return state;
  }
}
