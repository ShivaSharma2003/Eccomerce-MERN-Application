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

const SignInUserAction = (credentials) => async (dispatch) => {
    try {
        dispatch({ type: user.USER_SIGNIN_REQUEST })
        const config = {
            email: credentials.email,
            password: credentials.password
        }
        const { data } = await axios.post('api/user/post/login', config)
        localStorage.setItem('token', data.token)
        dispatch({ type: user.USER_SIGIN_SUCCESS, data: data });
    } catch (error) {
        dispatch({ type: user.USER_SIGIN_FAILS, error: error.message })
        console.log(error)
    }
}

export { RegisterUserAction, SignInUserAction }