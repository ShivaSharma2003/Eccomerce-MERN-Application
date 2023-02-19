import { applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
import { configureStore } from '@reduxjs/toolkit'
import { registerUserReducer } from './reducers/UserReducer'


const reducer = combineReducers({
    registeredUser : registerUserReducer,
})

const store = configureStore({ reducer }, composeWithDevTools(applyMiddleware([thunk])))

export { store }