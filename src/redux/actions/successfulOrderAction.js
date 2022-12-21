export const GET_SUCCESSFUL = "GET_SUCCESSFUL"
export const GET_SUCCESSFUL_SUCCESS = "GET_SUCCESSFUL_SUCCESS"
export const GET_SUCCESSFUL_FAILURE = "GET_SUCCESSFUL_FAILURE"

export const getSuccessful = () =>({
    type: GET_SUCCESSFUL,
})

export const getSuccessfulSuccess = (success) =>({
    type: GET_SUCCESSFUL_SUCCESS,
    payload: success,
})

export const getSuccessfulFailure = () =>({
    type: GET_SUCCESSFUL_FAILURE,
})


export function fetchSuccessOrder(){
    return async (dispatch)=>{
        dispatch(getSuccessful())
        try {
            const response = await fetch("http://localhost:1337/api/orders/?populate=*")
            const data = await response.json()
            return dispatch(getSuccessfulSuccess(data))
        } catch (error) {
            return dispatch(getSuccessfulFailure())
        }
    }

}