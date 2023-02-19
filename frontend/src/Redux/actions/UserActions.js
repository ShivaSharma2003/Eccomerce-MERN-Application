import * as user from '../constants/userContants'
import axios from '../../axios'

const RegisterUserAction = (formData) => async (dispatch) => {
    try {
        dispatch({ type: user.USER_REGISTER_REQUEST })
        const config = {
            userName: formData.username,
            password: formData.password,
            email: formData.email,
        };
        const { data } = await axios.post("api/user/post/register", config);
        dispatch({ type: user.USER_REGISTER_SUCCESS, data: data });

    } catch (error) {
        dispatch({ type: user.USER_REGISTER_FAILS, error: error.message })
    }
}

export { RegisterUserAction }