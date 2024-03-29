export const GET_COURSES = "GET_COURSES"
export const GET_COURSES_SUCCESS = "GET_COURSES_SUCCESS"
export const GET_COURSES_FAILURE = "GET_COURSES_FAILURE"

export const getCourses = () =>({
    type: GET_COURSES
})

export const getCoursesSuccess = (courses) =>({
    type: GET_COURSES_SUCCESS,
    payload: courses
})

export const getCoursesFailure = () =>({
    type: GET_COURSES_FAILURE,
})


export function fetchCourses(){
    return async (dispatch)=>{
        dispatch(getCourses())
        try {
             // https://goge-africa-backend-production.up.railway.app/api/
            // const response = await fetch("http://localhost:1337/api/courses/?populate=*")
            // const response = await fetch("https://goge-africa-backend-production.up.railway.app/api/courses/?populate=*")
            const response = await fetch("https://goge-africa-backend.onrender.com/api/courses/?populate=*")
            // const response = await fetch("https://goge-africaa-backend.onrender.com/api/courses/?populate=*")
            const data = await response.json()
            console.log(data, "DATA");
            dispatch(getCoursesSuccess(data))
        } catch (error) {
            dispatch(getCoursesFailure())
        }
    }

}