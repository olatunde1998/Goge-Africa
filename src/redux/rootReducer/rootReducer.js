import { combineReducers } from 'redux'
import blogsReducer from 'redux/reducers/blogsReducer'
import coursesReducer from 'redux/reducers/CoursesReducer';

const rootReducer = combineReducers({
  blogs: blogsReducer,
  courses: coursesReducer,
})

export default rootReducer;