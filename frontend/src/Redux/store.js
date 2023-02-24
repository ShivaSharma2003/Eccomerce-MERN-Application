import { applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
import { configureStore } from '@reduxjs/toolkit'
import { registerUserReducer , SigninUserReducer } from './reducers/UserReducer'


const reducer = combineReducers({
    registeredUser : registerUserReducer,
    signInUser : SigninUserReducer,
})

const store = configureStore({ reducer }, composeWithDevTools(applyMiddleware([thunk])))

export default store