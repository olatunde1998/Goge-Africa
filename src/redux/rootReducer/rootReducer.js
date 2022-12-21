import { combineReducers } from 'redux'
import blogsReducer from 'redux/reducers/blogsReducer'
import coursesReducer from 'redux/reducers/CoursesReducer';
import successfulOrderReducer from 'redux/reducers/successfulOrderReducer';

const rootReducer = combineReducers({
  blogs: blogsReducer,
  courses: coursesReducer,
  successfulData: successfulOrderReducer,
})

export default rootReducer;