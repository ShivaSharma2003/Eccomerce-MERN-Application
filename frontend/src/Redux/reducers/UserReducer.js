import * as user from '../constants/userContants'

export const registerUserReducer = (state = { registeredUser: {}, success: false }, action) => {
    switch (action.type) {
        case user.USER_REGISTER_REQUEST:
            return { loading: true }
        case user.USER_REGISTER_SUCCESS:
            return { loading: false, registeredUser: action.data, success: true }
        case user.USER_REGISTER_FAILS:
            return { loading: false, error: action.error, success: false }
        default:
            return state;
    }
}

const initialState = {
    token: localStorage.getItem('token')
}

export const SigninUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case user.USER_SIGNIN_REQUEST:
            return { loading: true }
        case user.USER_SIGIN_SUCCESS:
            return { token: action.data, success: true, loading: false }
        case user.USER_SIGIN_FAILS:
            return { loading: false, success: false, error: action.error }
        default:
            return state
    }
}