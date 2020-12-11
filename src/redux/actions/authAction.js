import { REGISTER_SUCCESS } from "./types"

export const registerUser = formData =>async dispatch => {
    try {
        const res = await axios.post('http://localhost:9010/api/auth/signup', newUser)

        dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
        })
    }
}