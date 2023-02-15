export const GET_BLOGS = "GET_BLOGS"
export const GET_BLOGS_SUCCESS = "GET_BLOGS_SUCCESS"
export const GET_BLOGS_FAILURE = "GET_BLOGS_FAILURE"

export const getBlogs = () =>({
    type: GET_BLOGS
})

export const getBlogsSuccess = (blogs) =>({
    type: GET_BLOGS_SUCCESS,
    payload: blogs
})

export const getBlogsFailure = () =>({
    type: GET_BLOGS_FAILURE,
})


export function fetchBlogs(){
    return async (dispatch)=>{
        dispatch(getBlogs())
        try {
            // const response = await fetch("http://localhost:1337/api/blog-articles/?populate=*")
            const response = await fetch("https://goge-africa-backend-production.up.railway.app/api/blog-articles/?populate=*")
            // const response = await fetch("https://goge-africa-backend.onrender.com/api/blog-articles/?populate=*")
            const data = await response.json()
            dispatch(getBlogsSuccess(data))
        } catch (error) {
            dispatch(getBlogsFailure())
            
        }
    }

}