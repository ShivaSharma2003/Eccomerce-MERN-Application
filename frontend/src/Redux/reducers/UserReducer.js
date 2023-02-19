import * as user from '../constants/userContants'

const registerUserReducer = (state = {}, action) => {
    switch (action.type) {
        case user.USER_REGISTER_REQUEST:
            return { loading: true }
        case user.USER_REGISTER_SUCCESS:
            return { loading: false, registeredUser: action.data }
        case user.USER_REGISTER_FAILS:
            return { loading: false, error: action.error }
    }
}

export { registerUserReducer }