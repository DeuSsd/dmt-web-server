import { configureStore } from '@reduxjs/toolkit'
import authorizationReducer from './authorizationReducer'


let store = configureStore(
    {
        reducer: {
            authorizationPage: authorizationReducer,
        }
    })


export default store;

window.store = store;
